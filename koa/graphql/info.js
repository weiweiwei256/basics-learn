import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    isOutputType,
} from 'graphql'

import mongoose from 'mongoose'
const Info = mongoose.model('Info')

export let InfoType = new GraphQLObjectType({
    name: 'Info',
    fields: {
        _id: {
            type: GraphQLID,
        },
        height: {
            type: GraphQLString,
        },
        weight: {
            type: GraphQLString,
        },
        hobby: {
            type: new GraphQLList(GraphQLString),
        },
        meta: {
            type: new GraphQLObjectType({
                name: 'mete',
                fields: {
                    createdAt: {
                        type: GraphQLString,
                    },
                    updatedAt: {
                        type: GraphQLString,
                    },
                },
            }),
        },
    },
})

export const infos = {
    type: new GraphQLList(InfoType),
    args: {
        // height: {
        //     name: 'height',
        //     type: new GraphQLList(GraphQLString),
        // },
    },
    resolve(root, params, options) {
        // if (params.height) {
        //     return Info.find({
        //         height: params.height,
        //     }).exec()
        // } else {
            return Info.find({}).exec()
        // }
    },
}

export const info = {
    type: InfoType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve(root, params, options) {
        return Info.findOne({
            _id: params.id,
        }).exec()
    },
}
