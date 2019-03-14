import CommonCodec from './CommonCodec.js'
class process extends mxCell {}
let processCodec = new CommonCodec(process)
processCodec.isCellCodec = function() {
  return true
}
processCodec.decode = function(dec, node, into) {
  if (into == null) {
    into = this.cloneTemplate()
  }
  dec.putObject('root', into)
  node = this.beforeDecode(dec, node, into)
  this.decodeNode(dec, node, into)
  return this.afterDecode(dec, node, into)
}
processCodec.decodeChild = function(dec, child, obj) {
  dec.decodeCell(child)
}

mxCodecRegistry.register(processCodec)
