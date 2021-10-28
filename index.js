/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-10-28 22:53:21
 * @LastEditTime: 2021-10-28 23:24:51
 * @LastEditors: Lewis
 */
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})