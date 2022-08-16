/*
 * @Author: hly
 * @Date: 2022-08-16 14:08:51
 * @LastEditors: hly
 * @LastEditTime: 2022-08-16 14:09:03
 * @Description:
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}