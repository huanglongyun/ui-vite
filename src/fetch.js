/*
 * @Author: hly
 * @Date: 2022-08-17 15:00:45
 * @LastEditors: hly
 * @LastEditTime: 2022-08-17 15:07:59
 * @Description:
 */
const axios = require('axios')
exports.getData = () => axios.get('/abc/bcd')