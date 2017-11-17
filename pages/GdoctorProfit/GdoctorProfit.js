// pages/DmyProfit/DmyProfit.js
Page({
  data:{
    myInfo:{
      image:'../../images/doctor.png',
      name:'张某某',
      profit:100.00,
      doctorLists: [
        {
          name:'张某某',
          hospital:'北京协议医院',
          department:'内科',
          time:'2017年6月6日',
          num:'001568',
          image: '../../images/doctor.png',
          age: 36,
          profit: 100
        },{
          name:'张某某',
          hospital:'北京协议医院',
          department:'内科',
          time:'2017年6月6日',
          num:'001568',
          image: '../../images/doctor.png',
          age: 36,
          profit: 100
        }
      ]
    },
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
