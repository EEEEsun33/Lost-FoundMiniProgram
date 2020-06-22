// pages/profile/childCpns/w-header/w-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    jumpLogin() {
      console.log("跳转登录")
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
  }
})
