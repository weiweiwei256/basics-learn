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
import flowObject from './flow.json'
export default {
  name: 'flowEditor',
  data: function() {
    return {
      graph: null,
      vertices: [], //图源数组
      edges: [] //线数组
    }
  },
  methods: {
    initData: function() {
      this.graph.getModel().beginUpdate()
      try {
        let parent = this.graph.getDefaultParent()
        // add vertex
        for (let i = 0; i < flowObject.nodeList.length; i++) {
          let vertice = flowObject.nodeList[i]
          this.vertices[vertice.nodeId] = this.graph.insertVertex(
            parent,
            vertice.nodeId,
            vertice.data,
            vertice.x,
            vertice.y,
            vertice.width,
            vertice.height,
            vertice.style,
            vertice.relative
          )
        }
        // add edge
        for (let i = 0; i < flowObject.lineList.length; i++) {
          let edge = flowObject.lineList[i]
          let source = edge.sourceNode
          let target = edge.targetNode
          if (this.vertices[source] != undefined && this.vertices[target] != undefined) {
            this.edges[edge.lineId] = this.graph.insertEdge(
              parent,
              edge.lineId,
              edge.data,
              this.vertices[source],
              this.vertices[target]
            )
          } else {
            console.log('line data is abnormal.')
            console.log('line', edge)
          }
        }
        console.log(parent)
      } finally {
        // Updates the display
        this.graph.getModel().endUpdate()
      }
    },
    showFileText: function() {
      let encoder = new mxCodec()
      let node = encoder.encode(this.graph.getModel())
      mxUtils.popup(mxUtils.getPrettyXml(node), true)
    },
    updateProperty: function() {
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
        this.createTextField(form, cell, cell.value.label)
        div.appendChild(form.getTable())
        mxUtils.br(div)
      }
    },
    createTextField: function(form, cell, attribute) {
      let input = form.addText('label name' + ':', attribute)

      mxEvent.addListener(input, 'keypress', function(evt) {
        if (evt.keyCode == /*enter*/ 13 && !mxEvent.isShiftDown(evt)) {
          input.blur()
        }
      })

      mxEvent.addListener(input, 'blur', () => {
        this.updateValue(cell, input.value)
      })
    },
    updateValue: function(cell, value) {
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
    initToolBar: function() {
      let tbContainer = document.getElementById('toolbar')
      let toolbar = new mxToolbar(tbContainer)
      toolbar.enabled = false
      let vertex = new mxCell({ label: 'newNode', nodeType: 'node' }, new mxGeometry(0, 0, 100, 100), '')
      vertex.setVertex(true)
      let funct = (graph, evt, cell) => {
        graph.stopEditing(false)

        let pt = graph.getPointForEvent(evt)
        let vertexClone = graph.getModel().cloneCell(vertex)
        vertexClone.geometry.x = pt.x
        vertexClone.geometry.y = pt.y

        graph.setSelectionCells(graph.importCells([vertexClone], 0, 0, cell)) // 第二个第三个数字 是拖动创建结束时 相对鼠标的偏移位置
      }

      // Creates the image which is used as the drag icon (preview)
      let img = toolbar.addMode(null, '/static/src/images/rectangle.gif', funct)
      mxUtils.makeDraggable(img, this.graph, funct)
    }
  },
  mounted() {
    let container = document.getElementById('graphContainer')
    let graph = new mxGraph(container)
    this.graph = graph
    graph.getSelectionModel().addListener(mxEvent.CHANGE, (sender, evt) => {
      this.updateProperty()
    })

    this.updateProperty()
    this.graph.convertValueToString = function(cell) {
      if (cell.value.nodeType == 'node') {
        return 'sss'
      } else if (cell.value.nodeType == 'line') {
        return cell.value.label
      }
    }
    this.graph.valueForCellChanged = function(cell, newValue) {
      cell.value.label = newValue
    }
    this.initToolBar()
    this.initData()
    console.log(this.graph)
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
