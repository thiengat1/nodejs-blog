/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-10-28 22:53:21
 * @LastEditTime: 2021-11-01 23:18:55
 * @LastEditors: Lewis
 */
const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const morgan = require("morgan");


app.use(express.static(path.join(__dirname,'public')))
//http logger
app.use(morgan("combined"));

//template engine
app.engine("hbs", handlebars({
  extname:'.hbs'
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
