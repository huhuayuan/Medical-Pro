//doctorList.js 医生列表页面
//获取应用实例
var app = getApp()
Page({
  data: {
      loading: false,
      expandTabs: ['医生列表','创建账号'],
      currentIdx: 0
  },
  //切换tab
  swichTab: function(e){
    this.setData({
      currentIdx: e.currentTarget.id
    })
  },
  //滑动切换tab
  bindChange: function( e ) {
      this.setData({
        currentIdx: e.detail.current
      });
    }
})
