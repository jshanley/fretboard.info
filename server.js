var express       = require('express');

var app = express();

app.use('/views', express.static(__dirname + '/views/'));
app.use('/assets', express.static(__dirname + '/assets/'));

app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname,
    dotfiles: 'deny'
  })
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('listening on port', port + '...')
})
