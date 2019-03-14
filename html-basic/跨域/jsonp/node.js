var express = require("express");
var app = express();
app.get("/getNews", function(req, res) {
  var news = [
    "看电视",
    "大学在学习",
    "大家在跑步",
    "天气预报",
    "我要吃饭",
    "看电视"
  ];
  var data = [];
  for (var i = 0; i < 3; i++) {
    var index = parseInt(Math.random() * news.length);
    data.push(news[index]);
    news.splice(index, 1);
  }
  var cb = req.query.callback;
  res.send(cb + "(" + JSON.stringify(data) + ")");
});
app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
