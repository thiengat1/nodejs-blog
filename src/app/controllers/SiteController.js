/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-11-03 23:08:13
 * @LastEditTime: 2021-11-03 23:57:32
 * @LastEditors: Lewis
 */
class NewsController {
  //[GET] /home
  index(req, res) {
    res.render("home");
  }
  //[GET] /search
  search(req, res){
    res.render("search");

  }
}

module.exports = new NewsController();
