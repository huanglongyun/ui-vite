/*
 * @Author: hly
 * @Date: 2022-08-16 11:58:14
 * @LastEditors: hly
 * @LastEditTime: 2022-08-16 11:58:29
 * @Description:
 */
import { defineComponent, h } from "vue";

export default defineComponent({

  name: "SButton",

  // template:'<button>MyButton</button>'

  render() {

    return h("button", null, "MyButton");

  },

});