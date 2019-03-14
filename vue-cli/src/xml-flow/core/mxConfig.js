// import CommonNodeCodec from '../codec/nodeCodec/CommonNodeCodec.js'
mxCodecRegistry.getCodec = function(nodeType) {
  let codecName = nodeType
  if (nodeType != null) {
    if (mxCodecRegistry.aliases[nodeType] != null) {
      codecName = mxCodecRegistry.aliases[nodeType]
    }
    return mxCodecRegistry.codecs[codecName]
  }
}

mxCodecRegistry.register = function(codec) {
  if (codec != null) {
    var name = codec.getName()
    mxCodecRegistry.codecs[name] = codec
  }

  return codec
}
mxGraphView.prototype.getVisibleTerminal = function(edge, source) {
  var model = this.graph.getModel()
  var result = model.getTerminal(edge, source)
  var best = result

  while (result != null && result != this.currentRoot) {
    if (!this.graph.isCellVisible(best) || this.isCellCollapsed(result)) {
      best = result
    }

    result = model.getParent(result)
  }
  // Checks if the result is not a layer
  // if (model.getParent(best) == model.getRoot()) {
  //   best = null
  // }
  return best
}
// let commonCodec = new CommonNodeCodec(mxCell,'commonNode')
// mxCodecRegistry.register(commonCodec)
// mxCodecRegistry.addAlias('startEvent', 'commonNode')
// mxCodecRegistry.addAlias('eventEvent', 'commonNode')
