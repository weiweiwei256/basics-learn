import Vue from 'vue'
import Router from 'vue-router'
import Matter from '@/matter/Matter.vue'
import FlowEditor from '@/floweditor/FlowEditor.vue'
import XMLFlow from '@/xml-flow/XMLFlow.vue'
import JsonFlow from '@/json-flow/JsonFlow.vue'
import UploadDownload from '@/upload-download/UploadDownload.vue'
import Echarts from '@/Echarts/Echarts.vue'
import AwesomeSwiper from '@/swiper/vue-awesome-swiper/AwesomeSwiper.vue'
import BetterScrollDemo from '@/swiper/better-scroll/BetterScrollDemo.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/BetterScrollDemo',
            component: BetterScrollDemo
        }, {
            path: '/AwesomeSwiper',
            component: AwesomeSwiper
        },
        {
            path: '/Matter',
            component: Matter
        },
        {
            path: '/FlowEditor',
            component: FlowEditor
        },
        {
            path: '/XMLFlow',
            component: XMLFlow
        },
        {
            path: '/jsonflow',
            component: JsonFlow
        },
        {
            path: '/UploadDownload',
            component: UploadDownload
        },
        {
            path: '/Echarts',
            component: Echarts
        }
    ]
})