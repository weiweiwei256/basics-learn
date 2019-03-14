import CommonCodec from './CommonCodec.js'
class CommonNodeCodec extends CommonCodec {
  isCellCodec() {
    return true
  }
  beforeDecode(dec, node, obj) {
    obj.setId(node.getAttribute('id'))
    this.decodeGemotry(dec, node, obj)
    this.defineCustomData(obj)
    obj.vertex = '1'
    obj.parent = dec.objects['root']
    return node
  }
  decodeGemotry(dec, node, obj) {
    let BPMNShape = dec.document.getElementById('BPMNShape_' + obj.getId())
    let geometryNode = BPMNShape.firstElementChild
    let geometryCell = dec.decode(geometryNode)
    this.addObjectValue(obj, 'geometry', geometryCell)
  }
  defineCustomData(obj) {}
}
export default CommonNodeCodec
