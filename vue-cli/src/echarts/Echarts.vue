<template>
  <div>
    <p>echarts</p>
    <el-button type="default"
               @click='handleClick'>测试</el-button>
    <div ref='echarts'
         style="width: 600px;height:400px;">echarts demo</div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'learn-charts',
  data: function() {
    return {
      myChart: undefined,
      option: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        dataZoom: [
          {
            // 这个dataZoom组件，默认控制x轴。
            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 0,
            end: 100
          }
        ],
        legend: {
          data: ['销量', '2016']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          },
          {
            type: 'bar',
            name: '2016',
            data: [95.8, 89.4, 91.2, 76.9]
          },
          {
            type: 'line',
            name: '2017',
            data: [97.7, 83.1, 92.5, 78.1]
          }
        ]
      }
    }
  },
  methods: {
    handleClick: function() {
      this.myChart.setOption({
        series: [
          {
            name: '销量ss',
            type: 'bar',
            data: [10, 10, 10, 10, 10, 10]
          },
          {
            type: 'bar',
            name: '2016',
            data: [20, 20, 20, 20, 20]
          },
          {}
        ]
      })
    }
  },
  mounted: function() {
    this.myChart = echarts.init(this.$refs.echarts, null, { renderer: 'svg' })
    this.myChart.setOption(this.option)
  }
}
</script>

<style>
</style>
