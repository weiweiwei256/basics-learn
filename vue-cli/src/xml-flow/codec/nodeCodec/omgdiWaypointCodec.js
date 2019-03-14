import CommonCodec from './CommonCodec.js'
class waypoint extends mxPoint {}
let omgdiWaypointCodec = new CommonCodec(waypoint, 'omgdi:waypoint')
mxCodecRegistry.register(omgdiWaypointCodec)
