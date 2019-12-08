// 引入mongoose模块
import mongoose from 'mongoose'
import config from '../config'

// 同步引入 info model和 studen model
require('./schema/info')
require('./schema/student')

// 链接mongodb
export const database = () => {
    mongoose.set('debug', true)
    mongoose.connect(config.dbPath, { useNewUrlParser: true, useUnifiedTopology: true })

    mongoose.connection.on('disconnected', err => {
        console.error('------------------链接失败-------------------')
        // mongoose.connect(config.dbPath)
    })
    mongoose.connection.on('error', err => {
        console.error(err)
    })

    mongoose.connection.on('open', async () => {
        console.log('Connected to MongoDB ', config.dbPath)
    })
}
