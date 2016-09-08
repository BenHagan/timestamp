var express = require('express');

app = express();

app.get('/:time', function(req, res) {
  var time = req.params.time;
  if (isNaN(Date.parse(time))) {
    res.json({unix: null,
              natural: null
            });
  }
  var date = new Date(time);
  res.json({unix: date.getTime(),
            natural: date.toDateString()
          });
});

app.listen(process.env.PORT);
