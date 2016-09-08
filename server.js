var express = require('express');
var path = require('path');
app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/:time', function(req, res) {
  if (isNaN(+req.params.time)) {
    var time = req.params.time;
  } else {
    var time = +req.params.time * 1000;
  }
  var date = new Date(time);
  if (isNaN(date)) {
    res.json({unix: null,
              natural: null
            });
  }

  res.json({unix: Math.floor(date.getTime() / 1000),
            natural: date.toDateString()
          });
});

app.listen(process.env.PORT);
