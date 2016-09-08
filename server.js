var express = require('express');

app = express();

app.get('/:time', function(req, res) {
  var time = req.params.time;
  var date = new Date(+time);
  if (isNaN(date)) {
    res.json({unix: null,
              natural: null
            });
  }

  res.json({unix: date.getTime(),
            natural: date.toDateString()
          });
});

app.listen(process.env.PORT);
