import './nodeCodec/definitionCodec'
import './nodeCodec/processCodec'
import './nodeCodec/startEventCodec'
import './nodeCodec/endEventCodec'
import './nodeCodec/sequenceFlowCodec'

import './nodeCodec/omgdcBoundsCodec'
import './nodeCodec/omgdiWaypointCodec'
class BPMNCodec extends mxCodec {
  decode(node, into) {
    let obj
    var dec = mxCodecRegistry.getCodec(node.nodeName)
    if (dec != null) {
      obj = dec.decode(this, node, into)
    } else {
      console.error('unknown nodeType:' + node.nodeName)
    }

    return obj
  }
}
export default BPMNCodec
