import Koa from 'koa'
import KoaStatic from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import { database } from './mongodb'

database()

const GraphqlRouter = require('./router')

const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.use(KoaStatic(__dirname + '/public'))

router.use('', GraphqlRouter.routes())

app.use(router.routes()).use(router.allowedMethods())

const port = 4000
app.listen(port)
