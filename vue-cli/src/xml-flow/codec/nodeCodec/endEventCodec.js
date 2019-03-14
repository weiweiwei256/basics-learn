import CommonNodeCodec from './CommonNodeCodec.js'
class endEvent extends mxCell {}
let endEventCodec = new CommonNodeCodec(endEvent)
endEventCodec.defineCustomData = function(obj) {
  obj.style = 'rounded=1'
}
mxCodecRegistry.register(endEventCodec)
