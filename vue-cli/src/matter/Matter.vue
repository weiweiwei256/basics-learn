<template>
  <div id="matter-container">
    <div id='matter-render'>

    </div>
    <div id='operation'>
      <el-button @click='handleAdd'>add object</el-button>
      <span>view x:</span>
      <el-slider v-model="viewPort.max.x"
                 :max='1920'></el-slider>
      <span>view y:</span>
      <el-slider v-model="viewPort.max.y"
                 :max='1080'></el-slider>
      <el-button @click='sceneStart'>start</el-button>
      <el-button @click='scenePause'>pause</el-button>
    </div>
  </div>
</template>

<script>
import {
  Engine,
  Render,
  Body,
  Runner,
  World,
  Bodies,
  Events,
  MouseConstraint,
  Composite,
  Bounds,
  Vertices
} from 'matter-js'
export default {
  name: 'Matter',
  data: function() {
    return {
      engine: null,
      render: null,
      runner: Runner.create(),
      velocityY: 0,
      renderDom: null,
      viewPort: {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
      }
    }
  },
  watch: {
    viewPort: {
      handler: function() {
        Render.lookAt(this.render, this.viewPort)
      },
      deep: true
    }
  },
  methods: {
    handleAdd: function() {},
    sceneStart: function() {
      Runner.start(this.runner, this.engine)
    },
    scenePause: function() {
      debugger
    }
  },
  mounted() {
    this.renderDom = $('#matter-render')[0]
    this.engine = Engine.create()
    this.render = Render.create({
      element: this.renderDom,
      engine: this.engine,
      options: {
        showCollisions: true
      }
    })
    Events.on(this.engine, 'collisionStart', event => {
      console.error('-------------------------collisionStart--------------------------------')
      console.log(event.pairs[0].bodyA.label)
      console.log(event.pairs[0].bodyB.label)
      // console.log(event.source.pairs.list[0].bodyA.velocity.y)
      this.velocityY = event.source.pairs.list[0].bodyA.velocity.y
    })
    Events.on(this.engine, 'collisionEnd', event => {
      console.error('-------------------------collisionEnd--------------------------------')
      console.log(event.pairs[0].bodyA.label)
      console.log(event.pairs[0].bodyB.label)
      // console.log(event.source.pairs.list[0].bodyA.velocity.y)
      Body.setVelocity(event.source.pairs.list[0].bodyA, { x: 0, y: this.velocityY * -1 })
    })
    let boxA = Bodies.rectangle(40, 40, 80, 80, {
      mass: 100,
      label: 'boxA',
      inertia: Infinity,
      frictionAir: 0,
      friction: 0,
      restitution: 1
    })
    let boxB = Bodies.rectangle(200, 540, 80, 80, {
      label: 'boxB',
      mass: 1,
      inertia: Infinity,
      frictionAir: 0,
      friction: 0,
      restitution: 1
    })
    let circle1 = Bodies.circle(400, 540,40, {
      mass: 1,
      inertia: Infinity,
      frictionAir: 0,
      friction: 0,
      restitution: 1
    })
    let ground = Bodies.rectangle(400, 610, 810, 60, {
      label: 'ground',
      inertia: Infinity,
      isStatic: true
    })
    World.add(this.engine.world, [boxA, boxB, circle1, ground])
    //选中监听  暂只支持选中body
    // TODO: 1. 由于element渲染后 元素大小改变导致鼠标位置不准  matter-render放在前面  寻找更好solution
    //       2. 视野改变未加入的事件中 得自己处理
    //         先通过树选中
    Events.on(MouseConstraint.create(this.engine), 'mousedown', event => {
      let mousePosition = event.mouse.mousedownPosition
      let bodies = Composite.allBodies(this.engine.world)
      for (let i = 0; i < bodies.length; i++) {
        let body = bodies[i]
        if (Bounds.contains(body.bounds, mousePosition) && Vertices.contains(body.vertices, mousePosition)) {
          console.log(body)
        }
      }
    })
    Render.lookAt(this.render, this.viewPort)
    // 渲染运行
    Render.run(this.render)
    // Engine.run(this.engine)
  }
}
</script>

<style scoped>
</style>
