/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-11-03 23:08:13
 * @LastEditTime: 2021-11-03 23:54:29
 * @LastEditors: Lewis
 */
class SiteController {
  //[GET] new
  index(req, res) {
    res.render("news");
  }
  //[GET] /new/:slug
  show(req, res){
      res.send('NEWS DETAIL!')

  }
}

module.exports = new SiteController();
