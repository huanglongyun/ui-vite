/*
 * @Author: hly
 * @Date: 2022-08-16 14:06:40
 * @LastEditors: hly
 * @LastEditTime: 2022-08-16 14:17:58
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/

const rollupOptions = {

    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};

export default defineConfig({

    plugins: [vue(),
    // 添加JSX插件
    vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
    })
    ],
    // 添加库模式配置

    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "SmartyUI",
            fileName: "smarty-ui",
            // 导出模块格式
            formats: ["esm", "umd", "iife"],
        },
    },

});