/*
 * @Description:
 * @Author: Lewis
 * @Date: 2021-11-03 23:07:43
 * @LastEditTime: 2021-11-03 23:58:20
 * @LastEditors: Lewis
 */
const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
