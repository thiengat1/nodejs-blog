/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-11-03 23:07:43
 * @LastEditTime: 2021-11-03 23:47:17
 * @LastEditors: Lewis
 */
const express = require("express");
const router = express.Router();
const newsController=require('../app/controllers/NewsController')

router.use('/:slug',newsController.show)
router.use('/',newsController.index)


module.exports=router;