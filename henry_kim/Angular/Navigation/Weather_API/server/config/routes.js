var path = require('path');

// routes are first checked here, in Express
module.exports = function(app) {
  // if no Express routes match, go back to Angular
  app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'))
  });
}
