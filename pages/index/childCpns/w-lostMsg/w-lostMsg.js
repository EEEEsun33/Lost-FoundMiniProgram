// pages/index/childCpns/w-lostMsg/w-lostMsg.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lostMsgs: {
      type: Array,
      value: {}
    },
    lostnum: {
      type: Number,
      value: 789
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  onLoad: function (options) {
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    enterDetails: function (e) {
      var that = this;
      var goodsId = e.currentTarget.dataset.goodsid;
      console.log('goodsId:' + goodsId);
      wx.navigateTo({ 
        // url: '../detail/detail?goodsId=' + goodsId 
        url: '/pages/details/details'
      })
    },
  }
})
