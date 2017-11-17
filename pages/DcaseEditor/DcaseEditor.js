// pages/DcaseEditor/DcaseEditor.js
Page({
  data:{
    cf_orderNo : '00000123',
    patient:{
        id:'P000001',
        medHistory : '',
        sketch : '感冒发烧......',
        details: '由热伤风引起的的*******由热伤风引起的的*******由热伤风引起的的',
        prescription : ['000025','000025','000025','000025','000025','000025','000025']
      }
  },
  //输入简述
  sketchInput:function(e){
      this.setData({  
        sexTab: e.detail.value
      })  
  },
  //输入详情
  detailsInput:function(e){
      this.setData({  
        sexTab: e.detail.value
      })  
  },
  //保存触发
  submitCase:function(e){
    wx.showToast({
        title : '请稍后...',
        icon : 'loading'
      });   
      wx.request({
        url: 'https://URL',
        data: this.data.patient,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          // success
        },
        fail: function() {
          // fail
          //wx.hideToast();
        },
        complete: function() {
          // complete
        }
      })
  },
  onLoad:function(options){
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