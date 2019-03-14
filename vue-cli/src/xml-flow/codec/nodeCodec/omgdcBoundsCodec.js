import CommonCodec from './CommonCodec.js'
class bounds extends mxGeometry {}
let omgdcBoundsCodec = new CommonCodec(bounds, 'omgdc:Bounds')
mxCodecRegistry.register(omgdcBoundsCodec)
