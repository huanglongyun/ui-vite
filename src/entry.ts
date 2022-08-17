/*
 * @Author: hly
 * @Date: 2022-08-16 14:17:04
 * @LastEditors: hly
 * @LastEditTime: 2022-08-17 16:54:55
 * @Description:
 */
import { App } from "vue";
import MyButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

// 导出单独组件
export { MyButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
