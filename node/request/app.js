const axios = require('axios')
const INDEX_STRING =
    '<span class="installs-text" title="The number of unique installations, not including updates.">'
axios
    .get('https://marketplace.visualstudio.com/items?itemName=RUNNERUP.super-encourager')
    .then(data => {
        let htmlContent = data.data
        
        let a = htmlContent.indexOf(INDEX_STRING) + INDEX_STRING.length
        let b = htmlContent.indexOf('installs', a)
        if (parseInt(htmlContent.substring(a, b).trim().replace(/[^0-9]/ig,""))) {
            console.log(parseInt(htmlContent.substring(a, b).trim()))
        }
        console.log(Date.now())
    })
