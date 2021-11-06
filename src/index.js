/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-10-28 22:53:21
 * @LastEditTime: 2021-11-03 23:43:29
 * @LastEditors: Lewis
 */
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const morgan = require('morgan');
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//http logger
app.use(morgan('combined'));

//template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
