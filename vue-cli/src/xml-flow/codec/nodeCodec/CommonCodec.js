class CommonCodec extends mxObjectCodec {
  constructor(constructor, name = constructor.name, idrefs) {
    super(null, [], idrefs, [])
    this.constructor = constructor
    this.name = name
  }
  getName() {
    return this.name
  }
  cloneTemplate() {
    return new this.constructor()
  }
  decode(dec, node, into) {
    if (into == null) {
      into = this.cloneTemplate()
    }
    let nodeId = node.getAttribute('id')
    if (nodeId != null) {
      dec.putObject(nodeId, into)
    } else {
      dec.putObject(node.nodeName, into)
    }
    node = this.beforeDecode(dec, node, into)
    this.decodeNode(dec, node, into)
    return this.afterDecode(dec, node, into)
  }
  isIgnoredAttribute(dec, attr, obj) {
    return false
  }
}
export default CommonCodec
