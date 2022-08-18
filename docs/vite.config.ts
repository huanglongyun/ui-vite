/*
 * @Author: hly
 * @Date: 2022-08-16 15:57:10
 * @LastEditors: hly
 * @LastEditTime: 2022-08-16 15:57:14
 * @Description:
 */
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    Unocss(),
  ],
});