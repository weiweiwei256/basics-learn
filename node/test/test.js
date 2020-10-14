var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  changeId: '98',
  env: 'pre',
  workId: '251335',
  nickName: '雅君',
});
var config = {
  method: 'post',
  url: 'https://pre-ascp-admin.alibaba-inc.com/v2/change/deploy/enter',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
