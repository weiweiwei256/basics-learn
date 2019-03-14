import CommonNodeCodec from './CommonNodeCodec.js'
class startEvent extends mxCell {}
let startEventCodec = new CommonNodeCodec(startEvent, 'startEvent')
startEventCodec.defineCustomData = function(obj) {
  obj.style = 'shape=ellipse'
}
mxCodecRegistry.register(startEventCodec)
