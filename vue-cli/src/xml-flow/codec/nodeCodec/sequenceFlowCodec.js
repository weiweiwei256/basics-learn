import CommonCodec from './CommonCodec.js'
let attrMap = { sourceRef: 'source', targetRef: 'target' }
class sequenceFlow extends mxCell {}
let sequenceFlowCodec = new CommonCodec(sequenceFlow, 'sequenceFlow', [
  'sourceRef',
  'targetRef'
])
sequenceFlowCodec.isCellCodec = function() {
  return true
}
sequenceFlowCodec.beforeDecode = function(dec, node, obj) {
  obj.edge = '1'
  obj.setId(node.getAttribute('id'))
  this.decodeGemotry(dec, node, obj)
  obj.parent = dec.objects['root']
  for (var i = 0; i < this.idrefs.length; i++) {
    var attr = this.idrefs[i]
    var ref = node.getAttribute(attr)
    if (ref != null) {
      var object = dec.objects[ref]
      if (object == null) {
        var element = dec.getElementById(ref)
        if (element != null) {
          var decoder = mxCodecRegistry.codecs[element.nodeName]
          object = decoder.decode(dec, element)
        }
      }

      obj[attrMap[attr]] = object
    }
  }
  return node
}
sequenceFlowCodec.decodeGemotry = function(dec, node, obj) {
  let BPMNEdge = dec.document.getElementById('BPMNEdge_' + obj.getId())
  let mxGeometry = new window.mxGeometry()
  mxGeometry.relative = 1
  let wayPoints = []
  for (let i = 0; i < BPMNEdge.children.length; i++) {
    wayPoints[i] = dec.decode(BPMNEdge.children[i])
  }
  mxGeometry.sourcePoint = wayPoints[0]
  mxGeometry.targetPoint = wayPoints[1]
  this.addObjectValue(obj, 'geometry', mxGeometry)
}
mxCodecRegistry.register(sequenceFlowCodec)
