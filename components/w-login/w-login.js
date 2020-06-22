// components/w-login/w-login.js
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

    formSubmit:function(e) {
      var objdata = e.detail.value;
      var username = e.detail.value.username;
      var password = e.detail.value.password;

      //校验
      if (username == "" || password == "") {
        wx.showModal({
          title: '提示',
          content: '不能为空',
        })
      }
      else {
        wx.request({
          url: "",
          data: {
            username,
            password
          },
          method: 'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success:function(res) {
            console.log(res.data)
          },
          fail:function(res){
            console.log("------------fail-------")
          }
        })
      }
    }

  }
})
