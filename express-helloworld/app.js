var express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

  response = 'Thi is version 3 of the app.' + '\n';

  res.send(response);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

