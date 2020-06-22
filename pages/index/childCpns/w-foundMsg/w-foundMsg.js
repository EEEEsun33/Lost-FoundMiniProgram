// pages/index/childCpns/w-foundMsg/w-foundMsg.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    foundMsgs: {
      type: Array,
      value: {}
    },
    foundNum: {
      type: Number,
      value: 1186
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    enterDetails() {
      console.log("跳转登录")
      wx.navigateTo({
        url: '/pages/details/details',
      })
    }
  }
})
