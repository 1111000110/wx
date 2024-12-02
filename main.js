import App from './App'

// #ifndef VUE3
import Vue from 'vue'
App.mpType = 'app';
const app = new Vue({
  ...App
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

export function createApp() {
  const app = createSSRApp(App);
  return {
    app
  }
}
// #endif
//封装弹框方法
uni.$showMsg=function(title='数据请求失败！',duration=1500){
	uni.showToast({
		title:title,
		duration:duration,
		icon:'none'
	})
	
}
