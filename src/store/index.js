import Vue from 'vue';
import Vuex from 'vuex';

import editor from "./modules/editor";

import { Message } from "element-ui";
import { setLocalStorage, getLocalStorage } from "@/common/utils.js";

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		access_token: "",
		permissionsList: [],
		userInfo: {},
	},
	getters:{
		authorization(state) {
		  return state.access_token ? "Bearer " + state.access_token : "";
		},
		userInfo(state) {
		  return state.userInfo;
		}
	},
	actions:{
		/**
		 * 显示提示 msg.type 类型  msg.data 消息内容
		 * @param commit
		 * @param msg
		 */
		showMassage(store, msg) {
		  console.log(msg);
		  Message({
		    type: msg.type,
		    message: msg.message || msg.data
		  });
		}
	},
	mutations:{
		/**
		 * 更新用户data info数据
		 */
		UPDATE_USER_INFO(state, data) {
		  state.userInfo = { ...data };
		  // 存储状态
		  mutations["SAVE_USER_TO_LOCAL"](state);
		},
		
		/**
		 * 更新oauth相关
		 */
		UPDATE_ACCESS_TOKEN(state, data) {
		  state.access_token = data || "";
		  // 存储状态
		  mutations["SAVE_USER_TO_LOCAL"](state);
		},
		
		/**
		 * 更新个人权限相关
		 * @param state
		 * @param data
		 */
		UPDATE_USER_PERMISSION(state, data) {
		  state.permissionsList = data || [];
		  // 存储状态
		  mutations["SAVE_USER_TO_LOCAL"](state);
		},
		
		/**
		 * 将user state 数据存储在localstore里面
		 * @param state
		 */
		SAVE_USER_TO_LOCAL(state) {
		  setLocalStorage("user", state);
		},
		/**
		 * 从localstorage里取出数据更新user
		 * @param state
		 */
		UPDATE_USER_FROM_LOCAL(state) {
		  let user = getLocalStorage("user");
		  if (user) {
		    for (let key in state) {
		      state[key] = user[key];
		    }
		  }
		}
	}
})

export default store