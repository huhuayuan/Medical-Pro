//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
    var that = this;
    that.globalData.phoneInfo = wx.getSystemInfoSync()
  },
  globalData: {
    userInfo: null,
    API_URL:''
  },
  // 获取书本信息 传入 doctor
  getDoctorInfo: function (data, callback) {
    var doctorInfo = {
      name:'张某某',
      hospital:'北京协和医院',
      department:'内科',
      treatment:'呼吸内科',
      time:'周一，周二，周三，周六，周日',
      num:'001568',
      image: '../../images/doctor.png',
      sex: '男',
      tel: 18812345678,
      age: 36,
      bills: [
        {
          num: 123456,
          name:'感冒颗粒'
        },{
          num: 123456,
          name:'感冒颗粒'
        },{
          num: 123456,
          name:'感冒颗粒'
        }
      ]
    };
    callback(doctorInfo)
  },
})
