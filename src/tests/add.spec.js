/*
 * @Author: hly
 * @Date: 2022-08-17 14:48:52
 * @LastEditors: hly
 * @LastEditTime: 2022-08-17 14:50:59
 * @Description:
 */
const add = require('../add')

describe('add', () => {
    test('1+1=2',() => {
        expect(add(1,1)).toBe(2)
    })
})