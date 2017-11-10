// pages/DaboutUs/DaboutUs.js
Page({
  data:{
    us:{
      title:'科创介绍',
      image: '../../images/case.png',
      section: [
        {
          h1:'公司介绍',
          text:'成立于2017年1月1日，公司主做医疗类，目前开拓北京市场......'
        },
        {
          h1:'公司介绍',
          text:'成立于2017年1月1日，公司主做医疗类，目前开拓北京市场......'
        },
        {
          h1:'公司介绍',
          text:'成立于2017年1月1日，公司主做医疗类，目前开拓北京市场......'
        }
      ]
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