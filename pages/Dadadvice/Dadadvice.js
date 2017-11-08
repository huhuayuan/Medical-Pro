// pages/Dadadvice/Dadadvice.js
Page({
  data: {  
    navbar: ['患者列表', '新建医嘱'],  
    currentTab: 0  ,
    sex : ['男','女'],
    sexTab : 0
  },  
  navbarTap: function(e){  
    this.setData({  
      currentTab: e.currentTarget.dataset.idx  
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