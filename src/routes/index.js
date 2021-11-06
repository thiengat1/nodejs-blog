/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-11-03 23:26:41
 * @LastEditTime: 2021-11-07 00:17:09
 * @LastEditors: Lewis
 */
const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app) {
  app.use('/news', newsRouter);
        app.use('/', siteRouter);
}

module.exports = route;
