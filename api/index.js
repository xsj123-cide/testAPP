import request from '@/common/util/request'

export const index = data => request.get('/api/xcx/index', data) // 获取商品列别接口