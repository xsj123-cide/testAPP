import request from '@/common/util/request'

export const getUserInfo = data => request.get('/app/user/info', data) // 获取用户信息