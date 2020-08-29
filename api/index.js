import request from '@/common/util/request'

export const index = data => request.get('/xcx/index', data) // 获取商品列别接口