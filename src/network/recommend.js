import {request} from './request';
export function goodsRecommend() {
  return request({
    url:'/recommend'
  })
}