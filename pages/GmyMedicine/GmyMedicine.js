// pages/DmyMedicine/DmyMedicine.js
Page({
  data:{
    medicineData :[
      {
        medicineImg:'../../images/case.png',
        medicineName:'[XXXX]感冒咳嗽胶囊',
        medicineEffect:'清热解毒，止咳化痰',
        medicineSpec:'0.3g*16粒',
        PlaceofOrigin:'中国',
        medicinePrice: 13.5,
        userImg:'../../images/case.png',
        userName:'李某某',
      },
      {
        medicineImg:'../../images/case.png',
        medicineName:'[XXXX]感冒咳嗽胶囊',
        medicineEffect:'清热解毒，止咳化痰',
        medicineSpec:'0.3g*16粒',
        PlaceofOrigin:'中国',
        medicinePrice: 13.5,
        userImg:'',
        userName:'',
      },
      {
        medicineImg:'../../images/case.png',
        medicineName:'[XXXX]感冒咳嗽胶囊',
        medicineEffect:'清热解毒，止咳化痰',
        medicineSpec:'0.3g*16粒',
        PlaceofOrigin:'中国',
        medicinePrice: 13.5,
        userImg:'../../images/case.png',
        userName:'李某某',
      },
      {
        medicineImg:'../../images/case.png',
        medicineName:'[XXXX]感冒咳嗽胶囊',
        medicineEffect:'清热解毒，止咳化痰',
        medicineSpec:'0.3g*16粒',
        PlaceofOrigin:'中国',
        medicinePrice: 13.5,
        userImg:'',
        userName:'',
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