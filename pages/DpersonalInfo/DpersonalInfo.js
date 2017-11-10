// pages/DpersonalInfo/DpersonalInfo.js
Page({
  data:{
    personalInfo:{
      id:'D000001',
      image:'../../images/case.png',
      name:'张某某',
      sex:'男',
      age: 29,
      mobile: 15134578149,
      conpany:'****医院',
      department:'外科',
      attending: '骨科',
      doctorCode: 'D000001'
    }
  },
  onLoad:function(options){
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