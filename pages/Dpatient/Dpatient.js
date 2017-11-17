// pages/Dpatient/Dpatient.js
Page({
  data:{
    navbar: ['基本信息', '病例'],  
    currentTab: 1,
    patient:{
        id:'P000001',
        name:'王某某',
        age:28,
        sex:'女',
        time:'2017年6月6日 10:00',
        image: '../../images/case.png',
        mobile:'15188888888',
        medHistory :'',
        sketch : '感冒发烧......',
        details: '由热伤风引起的的*******由热伤风引起的的*******由热伤风引起的的',
        prescription : [
            {
              yp_serial : '000025',
              yp_code: '000025',
              yp_name : '伤风感冒颗粒',
              yp_specification:"120*50mm*2贴/袋"
            },
            {
              yp_serial : '000025',
              yp_code: '000025',
              yp_name : '伤风感冒颗粒',
              yp_specification:"120*50mm*2贴/袋"
            },
            {
              yp_serial : '000025',
              yp_code: '000025',
              yp_name : '伤风感冒颗粒',
              yp_specification:"120*50mm*2贴/袋"
            },
            {
              yp_serial : '000025',
              yp_code: '000025',
              yp_name : '伤风感冒颗粒',
              yp_specification:"120*50mm*2贴/袋"
            }
          ]
      }
  },
  calling:function(e){  
    var that = this;
    wx.makePhoneCall({  
      phoneNumber: that.data.patient.mobile, //此号码并非真实电话号码，仅用于测试  
      success:function(){  
        console.log("拨打电话成功！")  
      },  
      fail:function(){  
        console.log("拨打电话失败！")  
      }  
    })  
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