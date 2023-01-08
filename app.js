const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

/**
 *  Project setting
 */

// set variables
const app = express();
const port = 3000;

// connect to MongoDB
require('./config/mongoose');

// set template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// set app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(routes);

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on the localhost:${port}`);
});
