import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import Api from './common/Api'
import config from "@/config";
import * as utils from "@/common/utils";

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import "@/assets/styles/element-variables.scss";
import "@/assets/styles/index.scss"; // 自定义 css

Vue.use(ElementUI)

/**
 * 引入接口Api/公共方法
 */
Vue.prototype.$utils = utils;
Vue.prototype.$API = Api;

Vue.prototype.$config = config;

/**
 * 公共配置信息
 */
Vue.config.productionTip = false

store.commit("UPDATE_USER_FROM_LOCAL");

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')


// import { createApp } from 'vue'
// import App from './App.vue'
// import router from "./router";

// createApp(App).use(router).mount('#app')
