// CommonJS模块规范
const math = require('./js/mathUtils');
const info = require('./js/info');
// ES6模块
// import  * as math from './mathUtils.js';


console.log('Hello Webpack');
console.log(math.add(10, 20));
console.log(math.mul(10, 20));
console.log(info.name);
console.log(info.age);

import Vue from 'vue';
// import App from './vue/app.js';
import vApp from './vue/app.vue';
new Vue({
  el: '#app',
  template: '<vApp/>',
  components: {
    vApp
  }
});

// 引用css文件
require('./css/index.css');
