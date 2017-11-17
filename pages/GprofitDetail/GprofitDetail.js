// pages/DprofitDetail/DprofitDetail.js
Page({
  data:{
    profitDetail:[
      {
        time:'2017-11-10',
        income:10,
        prevProfit : 90
      },
      {
        time:'2017-11-19',
        income:10,
        prevProfit : 80
      }
    ]
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