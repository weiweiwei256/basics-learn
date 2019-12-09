import mongoose from 'mongoose'
const Info = mongoose.model('Info') // 类

// 保存info信息
export const saveInfo = async (ctx, next) => {
    // 获取请求的数据
    const opts = ctx.request.body
    const info = new Info(opts) // 对象
    const saveInfo = await info.save() // 保存数据
    console.log(saveInfo)
    // 简单判断一下 是否保存成功，然后返回给前端
    if (saveInfo) {
        ctx.body = {
            success: true,
            info: saveInfo,
        }
    } else {
        ctx.body = {
            success: false,
        }
    }
}

// 保存info信息
export const removeInfo = async (ctx, next) => {
    // 获取请求的数据
    console.log(ctx.cookies.get('username'))
    console.log(ctx.cookies.get('pwd'))
    const opts = ctx.request.body
    if (opts && opts.id) {
        // let exist = await Info.exists({ _id: opts.id })
        // console.log(exist)
        // if (!exist) {
        //     ctx.body = {
        //         success: true,
        //         info: `数据存在状态：${exist}`,
        //     }
        // } else {
        //  异步转同步 方法1： 通过promise调用和await 可以删除不存在的数据？？？  如果id是符合校验的则一直成功  需要自己判断
            await Info.deleteOne({ _id: opts.id }).then(data => {
                if (data) {
                    ctx.body = {
                        success: false,
                        info: `数据删除成功`,
                    }
                }
            }).catch(err=>{
              console.log(err)
            })
        // }
        // 异步转同步 方法2：
        // await new Promise((resolve,reject)=>{
        //   Info.remove({ _id: opts.id }).exec(function(err, doc) {
        //       if (err) {
        //             console.log('数据删除失败')
        //             ctx.body = {
        //                 success: false,
        //                 info: `数据删除失败`,
        //             }
        //         }
        //         if (doc) {
        //           console.log('数据删除成功')
        //             ctx.body = {
        //                 success: true,
        //                 info: `数据删除成功`,
        //             }
        //         }
        //         resolve();
        //     })
        // })
    } else {
        ctx.body = {
            success: false,
            info: '未指定id无法删除！',
        }
    }
    console.error('------------------end-----------------------')
}

// 获取所有的info数据
export const fetchInfo = async (ctx, next) => {
    const infos = await Info.find({}) // 数据查询

    if (infos.length) {
        ctx.body = {
            success: true,
            info: infos,
        }
    } else {
        ctx.body = {
            success: false,
        }
    }
}
