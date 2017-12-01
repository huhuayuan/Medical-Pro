// pages/DpersonalCenter/DpersonalCenter.js
Page({
  data:{
    personalInfo:{
      id:'D000001',
      name:'张某某',
      sex:'男',
      image:'../../images/case.png',
      price:'10,000.00',
      medicine:5
    }
  },
  onLoad:function(options){
    getApp().editDoctorTabBar();
    wx.request({
      url: 'https://URL',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
