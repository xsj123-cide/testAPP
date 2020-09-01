import request from '@/common/util/request'

export const Login = data => request.get('/app/smsLogin.json', data) // 
export const GetCode = data => request.get('/app/pub/sendSmsCode.json', data) // 获取验证码