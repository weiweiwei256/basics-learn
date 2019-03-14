<template>
  <div id="floweditor">
    <p>this is a flow editor demo</p>
    <button @click="showFileText">view content</button>
    <div id="toolbar"></div>
    <div id="graphContainer"></div>
    <div id="property"></div>
  </div>
</template>

<script>
import demoData from './resource/demo.js'
import './core/mxConfig.js'
import XMLCodec from './codec/XMLCodec.js'
export default {
  name: 'xml-flow',
  data: function () {
    return {
      graph: null
    }
  },
  methods: {
    initData: function () {
      let doc = mxUtils.parseXml(demoData)
      let codec = new XMLCodec(doc)
      codec.decode(doc.documentElement, this.graph.getModel())
      console.log('model', this.graph.getModel())
    },
    showFileText: function () {
      let encoder = new XMLCodec()
      let node = encoder.encode(this.graph.getModel())
      mxUtils.popup(mxUtils.getPrettyXml(node), true)
    },
    updateProperty: function () {
      let div = document.getElementById('property')
      div.innerHTML = ''
      let cell = this.graph.getSelectionCell()
      if (cell == null) {
        mxUtils.writeln(div, 'Nothing selected.')
      } else {
        let center = document.createElement('center')
        mxUtils.writeln(center, 'nodeId: ' + cell.id)
        div.appendChild(center)
        mxUtils.br(div)

        // Creates the form from the attributes of the user object
        let form = new mxForm()
        this.createTextField(form, cell, cell.name)
        div.appendChild(form.getTable())
        mxUtils.br(div)
      }
    },
    createTextField: function (form, cell, attribute) {
      let input = form.addText('label name' + ':', attribute)

      mxEvent.addListener(input, 'keypress', function (evt) {
        if (evt.keyCode == /*enter*/ 13 && !mxEvent.isShiftDown(evt)) {
          input.blur()
        }
      })

      mxEvent.addListener(input, 'blur', () => {
        this.updateValue(cell, input.value)
      })
    },
    updateValue: function (cell, value) {
      let newValue = value || ''
      let oldValue = cell.value.label

      if (newValue != oldValue) {
        this.graph.getModel().beginUpdate()

        try {
          let edit = new mxValueChange(this.graph, cell, newValue)
          this.graph.getModel().execute(edit)
        } finally {
          this.graph.getModel().endUpdate()
        }
      }
    },
    initToolBar: function () {
      let tbContainer = document.getElementById('toolbar')
      let toolbar = new mxToolbar(tbContainer)
      toolbar.enabled = false
      let vertex = new mxCell(
        { label: 'newNode', nodeType: 'node' },
        new mxGeometry(0, 0, 100, 100),
        ''
      )
      vertex.setVertex(true)
      let funct = (graph, evt, cell) => {
        graph.stopEditing(false)

        let pt = graph.getPointForEvent(evt)
        let vertexClone = graph.getModel().cloneCell(vertex)
        vertexClone.geometry.x = pt.x
        vertexClone.geometry.y = pt.y

        graph.setSelectionCells(graph.importCells([vertexClone], 0, 0, cell)) // 第二个第三个数字 是拖动创建结束时 相对鼠标的偏移位置
      }

      let img = toolbar.addMode(null, '/static/src/images/rectangle.gif', funct)
      mxUtils.makeDraggable(img, this.graph, funct)
    }
  },
  mounted () {
    let graph = new mxGraph(document.getElementById('graphContainer'))
    this.graph = graph
    graph.getSelectionModel().addListener(mxEvent.CHANGE, (sender, evt) => {
      this.updateProperty()
    })

    this.updateProperty()
    this.graph.convertValueToString = function (cell) {
      return cell.name
    }
    this.graph.valueForCellChanged = function (cell, newValue) {
      cell.value.label = newValue
    }
    this.initToolBar()
    this.initData()
  }
}
</script>

<style scoped>
#graphContainer {
  position: relative;
  overflow: hidden;
  width: 800px;
  height: 400px;
  cursor: default;
  background: url('/static/src/images/grid.gif');
}
</style>
