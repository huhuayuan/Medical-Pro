// pages/DcaseEditor/DcaseEditor.js
Page({
  data:{
    cf_orderNo : '00000123',
    patient:{
        id:'P000001',
        medHistory : '',
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