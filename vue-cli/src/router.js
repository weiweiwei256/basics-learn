import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/demo/Demo.vue'
import Matter from '@/matter/Matter.vue'
import UploadDownload from '@/upload-download/UploadDownload.vue'
import Echarts from '@/Echarts/Echarts.vue'
import AwesomeSwiper from '@/swiper/vue-awesome-swiper/AwesomeSwiper.vue'
import BetterScrollDemo from '@/swiper/better-scroll/BetterScrollDemo.vue'
import DomToImg from '@/domToImg/DomToImg.vue'
import CropperDemo from '@/cropper/CropperDemo.vue'
import TrackDemo from '@/track/TrackDemo.vue'
import Tree from '@/tree/Tree.vue'
import CommonRoot from '@/common/CommonRoot.vue'
import CanvasDemo from '@/canvas/CanvasDemo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/VantDemo',
      component: () => import('@/test-vant/VantDemo.vue'),
    },
    {
      path: '/Demo',
      component: Demo,
    },
    {
      path: '/TrackDemo',
      component: TrackDemo,
    },
    {
      path: '/cropperdemo',
      component: CropperDemo,
    },
    {
      path: '/DomToImg',
      component: DomToImg,
    },
    {
      path: '/BetterScrollDemo',
      component: BetterScrollDemo,
    },
    {
      path: '/AwesomeSwiper',
      component: AwesomeSwiper,
    },
    {
      path: '/Matter',
      component: Matter,
    },
    {
      path: '/FlowEditor',
      component: () => import('@/floweditor/FlowEditor'),
    },
    {
      path: '/XMLFlow',
      component: () => import('@/xml-flow/XMLFlow.vue'),
    },
    {
      path: '/jsonflow',
      component: () => import('@/json-flow/JsonFlow.vue'),
    },
    {
      path: '/UploadDownload',
      component: UploadDownload,
    },
    {
      path: '/Echarts',
      component: Echarts,
    },
    {
      path: '/Tree',
      component: Tree,
    },
    {
      path: '/common',
      component: CommonRoot,
    },
    {
      path: '/canvas',
      component: CanvasDemo,
    },
    {
      path: '/scroll',
      component: () => import('@/scroll/scroll-demo'),
    },
    {
      path: '/sync',
      component: () => import('@/sync/SyncDemo.vue'),
    },
  ],
})
