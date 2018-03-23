const  path = require('path');
const  webpack = require('webpack');
const  express = require('express');
const bodyParser = require('body-parser');
const  config = require('../webpack.config');

const mongoose = require('mongoose');

const customResponses = require( "./middlewares/customResponses" );

const  app = express();
const  compiler = webpack(config);

const router = require('./routes/routes');

app.use(bodyParser.json());
app.use(customResponses);

require( "./config/mongoose" )( app );
require( "./app" )( app );

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));



// app.use('/', router);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});


console.log('----------------');



module.exports=app;