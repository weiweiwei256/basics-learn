const MongoClient = require('mongodb').MongoClient
const a = encodeURIComponent('download-counter')
const b = encodeURIComponent('856256')
const url = 'mongodb://' + a + ':' + b + '@39.105.32.133:27899/download?authMechanism=DEFAULT' // 连接的url
const CronJob = require('cron').CronJob
const axios = require('axios')
const INDEX_STRING =
    '<span class="installs-text" title="The number of unique installations, not including updates.">'
const VERSION_PREFIX = '"ExtensionName":"super-encourager","Version":"'
function getDownLoadCount() {
    return axios
        .get('https://marketplace.visualstudio.com/items?itemName=RUNNERUP.super-encourager')
        .then(data => {
            let htmlContent = data.data
            let a = htmlContent.indexOf(INDEX_STRING) + INDEX_STRING.length
            let b = htmlContent.indexOf('installs', a)
            let c = htmlContent.indexOf(VERSION_PREFIX)
            let d = htmlContent.indexOf('"},"MoreInfo":')
            let version = htmlContent.substring(c + VERSION_PREFIX.length, d)
            if (parseInt(htmlContent.substring(a, b).trim())) {
                console.log('获取下载数量成功')
                return {
                    timestamp: Date.now(),
                    count: parseInt(htmlContent.substring(a, b).trim()),
                    version: version,
                }
            } else {
                console.log('获取下载数量失败')
            }
        })
}

const timeMeter = new CronJob(
    '*/5 * * * * *',
    // '00 00 * * * *',
    function() {
        getDownLoadCount().then(data => {
            console.log(data)
            MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
                if (err) {
                    throw err
                }
                var dbo = db.db('download')
                dbo.collection('count').insert(data, (err, res) => {
                    if (err) {
                        throw err
                    }
                    console.log('保存下载信息成功')
                    db.close()
                })
                db.close()
            })
        })
    },
    null,
    true,
)
