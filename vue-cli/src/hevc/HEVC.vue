<template>
  <div id="hevc">
    hevc
    <div id="glplayer"></div>
  </div>
</template>

<script>
import './play.js'
export default {
  name: 'hevc',
  data: function () {
    return {}
  },
  mounted: function () {
    //var token = "============>>>>>>>>>>>>>>Author:changyanlong|numberwolf,Github:https://github.com/numberwolf,Email:porschegt23@foxmail.com,QQ:531365872,HomePage:http://xvideo.video,Discord:numberwolf#8694,Beijing,WorkIn:Baidu<<<<<<<<<<<<===========";
    var token =
      'base64:QXV0aG9yOmNoYW5neWFubG9uZ3xudW1iZXJ3b2xmLEdpdGh1YjpodHRwczovL2dpdGh1Yi5jb20vbnVtYmVyd29sZixFbWFpbDpwb3JzY2hlZ3QyM0Bmb3htYWlsLmNvbSxRUTo1MzEzNjU4NzIsSG9tZVBhZ2U6aHR0cDovL3h2aWRlby52aWRlbyxEaXNjb3JkOm51bWJlcndvbGYjODY5NCx3ZWNoYXI6bnVtYmVyd29sZjExLEJlaWppbmcsV29ya0luOkJhaWR1'
    var type = 'mp4'
    var url = 'https://www.zzsin.com/h265webjs/chuchuwen-hk_moov.mp4'
    const PLAYER_CORE_TYPE_DEFAULT = 0 // 默认内核 recommand!!!!!!
    const PLAYER_CORE_TYPE_CNATIVE = 1 // 测试内核 FLV请用此内核(FLV VOD use this mode)

    var config = {
      type: type,
      player: 'glplayer',
      width: 960,
      height: 540,
      accurateSeek: true,
      token: token,
      disabled: false,
      extInfo: {
        core: PLAYER_CORE_TYPE_DEFAULT,
        // core : PLAYER_CORE_TYPE_CNATIVE,
        coreProbePart: 0.4,
        moovStartFlag: true,
        readyShow: true,
        ignoreAudio: 0,
      },
    }
    makeH265webjs(url, config)
  },
}
</script>

<style></style>
