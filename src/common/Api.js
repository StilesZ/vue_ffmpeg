import request from '../common/ajax.js' // 用户账号服务

export default {
	// 工作人员接口
	GetPageList: (data) => {
		return request.post('/v1/reservation-codes', data)
	},
	GetMyTemplate: (data) => {
		return request.post('/v1/reservation-codes', data)
	},
	GetTemplateList: (data) => {
		return request.post('/v1/reservation-codes', data)
	},
	CheckInfo: (data) => {
		return request.post('/v1/reservation-codes', data)
	},
	BIndUserinfo: (data) => {
		return request.post('/v1/reservation-codes', data)
	},
	PaySuccess: (data) => {
		return request.post('/v1/reservation-codes', data)
	},
	SetPrimaryAccount: (data) => {
		return request.post('/v1/reservation-codes', data)
	},
	getWxConfig: (data) => {
		return request.post('/v1/reservation-codes', data)
	},
	getOpenid: (data) => {
		return request.post('/v1/reservation-codes', data)
	},
}
