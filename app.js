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
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    var that = this;
    that.globalData.phoneInfo = wx.getSystemInfoSync()
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  //医生页面状态的底部
  editDoctorTabBar: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.globalData.doctorTabBar;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true;//根据页面地址设置当前页面状态
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
  },
  //推广员页面的底部
  editPromoterTabBar: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.globalData.promoterTabBar;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true;//根据页面地址设置当前页面状态
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
  },
  //患者页面的底部
  editPatientTabBar: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.globalData.patientTabBar;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true;//根据页面地址设置当前页面状态
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
  },
  globalData: {
    userInfo: null,
    API_URL:'',
    doctorTabBar: {
      "list": [
        {
          "pagePath": "/pages/Dadadvice/Dadadvice",
          "text": "患者",
          "iconPath": "/images/patient.png",
          "selectedIconPath": "/images/patient-selected.png",
          "clas": "menu-item",
          "selectedColor": "#03a9f4",
          active: true
        },
        {
          "pagePath": "/pages/DpersonalCenter/DpersonalCenter",
          "text": "我的",
          "iconPath": "/images/self.png",
          "selectedIconPath": "/images/self-selected.png",
          "selectedColor": "#03a9f4",
          "clas": "menu-item",
          active: false
        }
      ]
    },
    promoterTabBar: {
      "list": [
        {
          "pagePath": "/pages/GdoctorList/GdoctorList",
          "text": "医生",
          "iconPath": "/images/doctor.png",
          "selectedIconPath": "/images/doctor-selected.png",
          "clas": "menu-item",
          "selectedColor": "#03a9f4",
          active: true
        },
        {
          "pagePath": "/pages/Gself/Gself",
          "text": "我的",
          "iconPath": "/images/self.png",
          "selectedIconPath": "/images/self-selected.png",
          "selectedColor": "#03a9f4",
          "clas": "menu-item",
          active: false
        }
      ]
    },
    patientTabBar: {
      "list": [
        {
          "pagePath": "/pages/otc/otc",
          "text": "OTC药品",
          "iconPath": "/images/otc.png",
          "selectedIconPath": "/images/otc-selected.png",
          "clas": "menu-item",
          "selectedColor": "#03a9f4",
          active: false
        },{
          "pagePath": "/pages/Prescription/Prescription",
          "text": "处方管理",
          "iconPath": "/images/case.png",
          "selectedIconPath": "/images/case-selected.png",
          "selectedColor": "#03a9f4",
          "clas": "menu-item",
          active: true
        },{
          "pagePath": "/pages/Pself/Pself",
          "text": "我的",
          "iconPath": "/images/self.png",
          "selectedIconPath": "/images/self-selected.png",
          "selectedColor": "#03a9f4",
          "clas": "menu-item",
          active: false
        }
      ]
    },

  },
  // 获取医生信息 传入 doctor
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
  }
})
