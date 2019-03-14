class JsonCodec {
  constructor() {
    this.objects = []
  }
  decode(jsonData, model) {
    // 1.0 将全局信息设置到model
    for (let i in jsonData) {
      if (!(jsonData[i] instanceof Object)) {
        model[i] = jsonData[i]
      }
    }
    // 2.0 将物体设置为mxCell
    let parentCell = model.root.children[0]
    for (let i in jsonData.bodies) {
      let mxCell = new window.mxCell()
      mxCell.vertex = true
      mxCell.style = 'round=1'

      let { x, y, width, height, type, options } = jsonData.bodies[i]
      mxCell.geometry = new window.mxGeometry(x, y, width, height)
      mxCell.name = options.label
      mxCell.type = type
      mxCell.value = options
      parentCell.insert(mxCell)
    }
    model.setRoot(model.root)
  }
  encode(model) {
    let jsonData = { name: '', description: '', bodies: [] }
    // 获取全局属性
    let newModel = new window.mxGraphModel()
    for (let i in model) {
      if (!(model[i] instanceof Object) && model[i] != newModel[i] && i != 'nextId') {
        jsonData[i] = model[i]
      }
    }
    for (let i in model.root.children[0].children) {
      let mxCell = model.root.children[0].children[i]
      let { geometry, value, type } = mxCell
      let { x, y, width, height } = geometry
      let body = { x, y, width, height }
      body.options = value
      body.type = type
      jsonData.bodies.push(body)
    }
    return jsonData
  }
}
export default JsonCodec
