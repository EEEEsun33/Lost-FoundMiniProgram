//index.js
//获取应用实例
const app = getApp()


// 导入封装网络请求函数
// import request from '../../service/network.js'
import { getMultiData } from '../../service/index.js'
import { getGoodsData } from '../../service/index.js'

var lostMsg = require('../../assets/data/lostMsg.js');  //引入
var foundMsg = require('../../assets/data/foundMsg.js');  //引入
var banner = require('../../assets/data/banner.js');  //引入

Page({
  data: {
    foundMsgs: {},
    // 3. 定义接收轮播图数据的变量 
    banners: {},
    lostMsgs: {},
    lostMessages: {},
    foundMessages: {},
    btnTop: "",
    goods: {
      'new': { page: 0, list: {} },
      'pop': { page: 0, list: {} },
      'sell': { page: 0 ,list: {} }
	  }
  },

  onLoad: function () {
    // 1.请求轮播图数据
    // this._getMultiData()

    // 请求商品数据
    this._getGoodsData(1)

    this.setData({ lostMessages: lostMsg.lostMsg });  //如果是异步操作赋值那么必须用this.setData
    this.setData({ foundMessages: foundMsg.foundMsg }); 
    this.setData({ banners: banner.banner }); 
  },

  // ---------------------------网络请求函数----------------------
  _getMultiData() {
    // 1.请求轮播图数据
    getMultiData().then(res => {
      console.log(res)
      // 2. 取出数据
      const banners = res.data.data.banner.list
      console.log(banners)

      // 4. 将获取的轮播图数据放在data对象中以供全局使用
      this.setData({
        banners: banners,
        lostMsgs: lostMsgs
      })
    }).catch(err => {
      console.log(err)
    })
  },

  _getGoodsData(pageNo) {
    const pageSize = 4

    // 1. 发送网络请求
    getGoodsData(pageNo, pageSize).then(res => {
      console.log(res)
      // 2. 取出数据
      const lostMessages = res.data.list
      console.log(lostMessages)

      // 4. 将获取的轮播图数据放在data对象中以供全局使用
      this.setData({
        lostMessages: lostMessages
      })
    }).catch(err => {
      console.log(err)
    })

  },

  // ---------------------------事件监听函数----------------------
  showHeight: function (e) {
    const bTop = e.detail;
    const btnTop = bTop - 50 + 'px'
    this.setData({
      btnTop: btnTop
    })
  },
})
