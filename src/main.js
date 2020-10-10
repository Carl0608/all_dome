import Vue from 'vue'
import App from './App.vue'
import router from './router'
//视频
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css' // 引入样式
import 'vue-video-player/src/custom-theme.css' // 引入样式
import 'videojs-flash'
Vue.use(VueVideoPlayer)

//兼容m3u8
// const hls = require('videojs-contrib-hls')
// Vue.use(hls)

//百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: '2mmdxXSzMDAfNEERdWKhiPxgtYNCvZwY'
})

//饿了么
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import Axios from './api/index'
Vue.prototype.$axios = Axios

//mock
import mock from './mock'
Vue.use(mock)

//高德
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'd871b4301ad046a60ed8427dec4761ec',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'Geocoder'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
//打印
import Print from 'vue-print-nb'
Vue.use(Print);

import LunarFullCalendar from "vue-lunar-full-calendar";
Vue.use(LunarFullCalendar);


import $ from 'jquery'
Vue.prototype.$ = $;


//日期
import FullCalender from 'vue-full-calendar'
Vue.use(FullCalender)


// //校验 地址https://www.vaptcha.com/document/install.html
// import VueVaptcha from 'vue-vaptcha'
// const options = {
//   vid: "5ef19b7e64b42a6f8798aa6b"
// }
// Vue.use(VueVaptcha(options))
// Vue.prototype.$vaptcha = VueVaptcha

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),

}).$mount('#app')