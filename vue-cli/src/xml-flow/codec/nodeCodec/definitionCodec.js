import CommonCodec from './CommonCodec.js'
class definitions {
  constructor(attrs) {
    this.attrs = attrs
  }
}
let definitionCodec = new CommonCodec(definitions)

definitionCodec.decode = function(dec, node, into) {
  node = this.beforeDecode(dec, node, into)
  this.decodeNode(dec, node, into)
  return this.afterDecode(dec, node, into)
}
definitionCodec.decodeNode = function(dec, node, obj) {
  this.decodeAttributes(dec, node, obj)
  this.decodeRoot(dec, node, obj)
}
// TODO:definition的数据没想好怎么存  就随意存储到model了
definitionCodec.decodeAttributes = function(dec, node, obj) {
  let definitionData = this.cloneTemplate()
  definitionData.attrs = node.attributes
  obj.definitionData = definitionData
}

definitionCodec.decodeRoot = function(dec, root, model) {
  let processNode = root.firstElementChild
  if (processNode != null && processNode.nodeName == 'process') {
    let processCell = dec.decodeCell(processNode)
    model.setRoot(processCell)
    console.log('processCell', processCell)
  }
}

mxCodecRegistry.register(definitionCodec)
