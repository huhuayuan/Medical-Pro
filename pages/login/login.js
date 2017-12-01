//获取应用实例
var app = getApp()
Page({
  data: {
    activeIndex: 0,
    tabs: ['账号登录','手机验证码登录'],
    userInfo: {
      phoneNumber: 15311111111
    },
    userData: {
      userName: null,
      password: null
    }
  },
  getName: function(e){
    var that = this;
    that.setData({
        'userData.userName': e.detail.value
    })
    console.log(e.detail.value)
  },
  getPassword: function(e){
    var that = this;
    that.setData({
        'userData.password': e.detail.value
    })
  },
  setPassword: function (e) {
    //联系方式
    var that = this.data.userData;
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
  },
  openLogin: function(){
    var that = this;
    var thatData = this.data.userData;
    // wx.switchTab({
    //     url: '../GdoctorList/GdoctorList'
    // })
    if (!thatData.userName || !thatData.password) {
      wx.showToast({
          title: '填写信息不完整',
          image: '../../images/case.png',
          duration: 2000
      })
      return;
    }
    if(thatData.userName == 'doctor' && thatData.password == 111111){
       wx.showToast({
         icon: 'loading',
         title: '正在登录',
         duration:2000
       })
       setTimeout(function(){
         wx.redirectTo({
             url: '../Dadadvice/Dadadvice'
         })
       },2000)
     }
    if(thatData.userName == 'test01' && thatData.password == 111111){
       wx.showToast({
         icon: 'loading',
         title: '正在登录',
         duration:2000
       })
       setTimeout(function(){
         wx.redirectTo({
             url: '../GdoctorList/GdoctorList'
         })
       },2000)
     }
    if(thatData.userName == 'test02' && thatData.password == 111111){
       wx.showToast({
         icon: 'loading',
         title: '正在登录',
         duration:2000
       })
       setTimeout(function(){
         wx.redirectTo({
             url: '../Prescription/Prescription'
         })
       },2000)
     }

     if((thatData.userName != 'test01' || thatData.userName != 'test02' || thatData.userName != 'doctor') && thatData.password != 111111) {
       wx.showToast({
         image: '../../images/case.png',
         title: '账号或密码错误',
         duration:2000
       })
     }

  },
  openRegister: function(){
    wx.navigateTo({
        url: '../register/register'
    })
  }
})
