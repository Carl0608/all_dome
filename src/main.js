import Vue from 'vue'
import App from './App.vue'

import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css' // 引入样式
import 'vue-video-player/src/custom-theme.css' // 引入样式
import 'videojs-flash'
import router from './router'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from './api/index'
import mock from './mock'


//高德
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'd871b4301ad046a60ed8427dec4761ec',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'Geocoder'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
import LunarFullCalendar from "vue-lunar-full-calendar";
Vue.use(LunarFullCalendar);
import $ from 'jquery'
Vue.prototype.$ = $;


//日期
import FullCalender from 'vue-full-calendar'
Vue.use(FullCalender)

Vue.prototype.$axios = Axios
Vue.use(mock)
Vue.use(ElementUI);
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: '2mmdxXSzMDAfNEERdWKhiPxgtYNCvZwY'
})
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),

}).$mount('#app')