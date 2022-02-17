//该文件为挂号服务接口配置域名
import Request from 'luch-request';
import store from "@/store/index";
import $config from "@/config/index";
import { Cookie } from "@/common/utils";

const getTokenStorage = () => {
  let token = ''
  try {
    token = uni.getStorageSync('accesstoken')
  } catch (e) {
    //TODO handle the exception
  }
  return token
}

const http = new Request();

http.setConfig((config) => { /* 设置全局配置 */
  // config.baseURL = 'https://user.nbgzjk.cn/japi' /* 用户服务根域名 */
  config.header = {
    ...config.header,
	'Authorization': store.getters.authorization,
	'x-csrf-token':  Cookie.get("x-csrf-token"),
	'content-type': 'application/json;charset=UTF-8',
	"accesstoken": store.state.access_token
  }
  return config
})

http.interceptors.request.use((config) => { /* 请求之前拦截器。可以使用async await 做异步操作 */
  config.header = {
    ...config.header,
	"accesstoken": getTokenStorage()
  }
  /*
 if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
   return Promise.reject(config)
 }
 */
  return config
}, (config) => {
  return Promise.reject(config)
})

http.interceptors.response.use(async (response) => { /* 请求之后拦截器。可以使用async await 做异步操作  */
  // if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
  //   return Promise.reject(response)
  // }
  return response
}, (response) => { // 请求错误做点什么。可以使用async await 做异步操作
  // console.log('请求错误返回=>',response)
  let errcode = null
  let errData = {}
  if (response.data instanceof Object){
	  errcode = response.data.errorCode
	  errData = response.data
  }else{
	  // console.log('response.data=>',response.data);
  }
  if(errcode==40100){
	  console.log(errData.message)
	  uni.setStorageSync({
		  key:'jetLag',
		  data:Number(errData.data.timestamp) - new Date().getTime()
	  })
  }
  return Promise.reject(response)
})

export default http;
