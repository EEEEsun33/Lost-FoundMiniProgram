import request from './network.js'

export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getGoodsData(pageNo,pageSize) {
  return request({
    url:'/found/lost',
    data: {
      pageNo: pageNo,
      pageSize: pageSize
    } 
  })
}