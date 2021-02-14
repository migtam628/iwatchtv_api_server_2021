const express = require("express");
const app = express();

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}

app.use(allowCrossDomain);

app.get("/subtitle-search", require("./subtitle"));
app.get('/imdb-torrent-search', require("./imdb_torrent"));
app.get('/xtorrent', require("./xtorrent"));

app.listen(5000);

module.exports = app;
