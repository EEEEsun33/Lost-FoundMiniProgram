// pages/index/childCpns/w-btn/w-btn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    'bTopp': {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
     //设置按钮组件的相对高度
  },

  /**
   * 组件的方法列表
   */
  methods: {
    publishLost () {
      console.log("我丢东西了")
      wx.navigateTo({
        url: '/pages/lost/lost'
      })
    },

    publishFound() {
      console.log("我找到东西了")
      wx.navigateTo({
        url: '/pages/found/found'
      })
    }
  }
})
