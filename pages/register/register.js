//获取应用实例
var app = getApp()
Page({
  data: {
    activeIndex: 0,
    tabs: ['账号登录','手机验证码登录'],
    userInfo: {
      phoneNumber: 15311111111
    }
  },
  setPassword: function (e) {
    //联系方式
    var that = this;
    that.setData({
        password: e.detail.value
    })
  },
  setPasswordAgain: function (e) {
    //联系方式
    var that = this;
    that.setData({
        passwordAgain: e.detail.value
    })
  },
  changePassword: function() {
    var that = this;
    var thatData = that.data;
    console.log("data",thatData);
  },
  tabClick: function(e){
    this.setData({
      activeIndex: e.currentTarget.id
    })
  }
})
