

import  commonjs  from "@rollup/plugin-commonjs";
import resolve from 'rollup-plugin-node-resolve' // 依赖引用插件
const extensions = [
    '.js',
    '.ts',
    '.tsx'
]

export default {
    "input": "./src/index.js",
    "output": [
        {
            file: "./lib/bundle-cjs.js",    // 必须
            format: 'cjs',
            name: "bundle-cjs"
        },
        {
            file: "./lib/bundle-umd.js",    // 必须
            format: 'umd',
            name: "bundle-umd"
        }
    ],
    Plugin: [
        resolve(extensions),
        commonjs()
    ]

}