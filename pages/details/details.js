// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // lostDetails: {},
    // type: Array,
    lostDetails: [
      { "id": 1, "name": "黑色雨伞", "cate": "物品", "location": "科技楼后面空地","description": "黑色花纹","date": "2020-5-6 上午","image":"../../assets/image/黑色雨伞.jpg" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  isMine() {
    wx.showModal({
      title: '拾得者：',
      content: '联系电话：',
    })
  }

})