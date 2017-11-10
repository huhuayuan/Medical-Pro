// pages/DFAQ/DFAQ.js
Page({
  data:{
    FAQ:[
      {
        title:'收益介绍',
        text : '用户在有效期内，所获得收益在有效期内当天会计算，变更时间在在0点-24点之间，有系统逐步批量处理......',
        message:'......'
      },
      {
        title:'收益介绍',
        text : '用户在有效期内，所获得收益在有效期内当天会计算，变更时间在在0点-24点之间，有系统逐步批量处理......',
        message:'......'
      },
      {
        title:'收益介绍',
        text : '用户在有效期内，所获得收益在有效期内当天会计算，变更时间在在0点-24点之间，有系统逐步批量处理......',
        message:'......'
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