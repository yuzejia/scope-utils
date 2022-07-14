import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';
export default [
  // UMD for browser-friendly build
  {
    input: './index.js',
    output: {
      name: 'ktools',
	    file: pkg.browser,
      format: 'umd',
      exports: 'auto'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript()
    ]
  },
  // CommonJS for Node and ES module for bundlers build
  {
    input: './index.js',
    external: ['ms'],
    plugins: [
      typescript(),
      copy({
        targets: [
            {src: './README.md', dest: 'lib/'},
            {src: './package.json', dest: 'lib/'},
    ]
      })
    ],
    output: [
      {  file: pkg.main, format: 'cjs', exports: 'auto' },
      {  file: pkg.module, format: 'es', exports: 'auto' }
    ]
  }
];
