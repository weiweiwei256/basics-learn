
// 引入GraphQL各种方法类型

import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    isOutputType
  } from 'graphql';
  
  import mongoose from 'mongoose'
  const Info = mongoose.model('Info') // 引入Info模块
  
  // 定义日期时间 类型
  const objType = new GraphQLObjectType({
    name: 'mete',
    fields: {
      createdAt: {
        type: GraphQLString
      },
      updatedAt: {
        type: GraphQLString
      }
    }
  })
  
  // 定义Info的数据类型
  let InfoType = new GraphQLObjectType({
    name: 'Info',
    fields: {
      _id: {
        type: GraphQLID
      },
      height: {
        type: GraphQLString
      },
      weight: {
        type: GraphQLString
      },
      hobby: {
        type: new GraphQLList(GraphQLString)
      },
      meta: {
        type: objType
      }
    }
  })
  
  // 批量查询
  const infos = {
    type: new GraphQLList(InfoType),
    args: {},
    resolve (root, params, options) {
      return Info.find({}).exec() // 数据库查询
    }
  }
  
  // 根据id查询单条info数据
  
  const info = {
    type: InfoType,
    // 传进来的参数
    args: {
      id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID) // 参数不为空
      }
    },
    resolve (root, params, options) {
      return Info.findOne({_id: params.id}).exec() // 查询单条数据
    }
  }
  
  // 导出GraphQLSchema模块
  
  export default new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Queries',
      fields: {
        infos,
        info
      }
    })
  })