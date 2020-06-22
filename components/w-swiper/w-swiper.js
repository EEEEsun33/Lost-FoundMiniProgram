// components/w-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    Hei: ""          //这是swiper要动态设置的高度属性
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imgH: function (e) {
      var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
      var imgh = e.detail.height;　　　　　　　　　　　　　　　　//图片高度
      var imgw = e.detail.width;
      var swiperHei = winWid * imgh / imgw;
      var swiperH = winWid * imgh / imgw + "px"　　　　　　//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度　　　　
      this.setData({
        Hei: swiperH　　　　　　　　//设置高度
      })
      this.triggerEvent('showHeight', swiperHei);
    },
  }
})
