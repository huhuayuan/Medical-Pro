//doctorList.js 医生列表页面
//获取应用实例
var app = getApp()
Page({
  data: {
      loading: false,
      expandTabs: ['医生列表','创建账号'],
      currentIdx: 0,
      sex : ['男','女'],
      sexTab : null,
      otcType: [
        {
          otc_id: 0,
          image: '../../images/drug.png',
          title: '感冒发烧'
        },
        {
          otc_id: 1,
          image: '../../images/drug.png',
          title: '咳嗽'
        },
        {
          otc_id: 2,
          image: '../../images/drug.png',
          title: '肠胃用药'
        },
        {
          otc_id: 3,
          image: '../../images/drug.png',
          title: '清热解毒'
        },
        {
          otc_id: 4,
          image: '../../images/drug.png',
          title: '儿童用药'
        },
        {
          otc_id: 5,
          image: '../../images/drug.png',
          title: '皮肤用药'
        },
        {
          otc_id: 6,
          image: '../../images/drug.png',
          title: '营养保健'
        },
        {
          otc_id: 7,
          image: '../../images/drug.png',
          title: '家庭常备'
        },
      ],
      phoneInfo: app.globalData.phoneInfo,
  },
  doctordetail: function(e){
    var doctorId = e.currentTarget.dataset.doctorId;
    //打开详情页
    wx.navigateTo({
        url: '../GdoctorDetail/GdoctorDetail?doctorId=' + doctorId,
    })
  },
  openDrugLists: function(e) {
    var otcId = e.currentTarget.dataset.otcId;
    //打开详情页
    // wx.navigateTo({
    //     url: '../otcList/otcList?otcId=' + otcId,
    // })
  },
  sexTap: function(e){
    this.setData({
      sexTab: e.currentTarget.dataset.sex
    })
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
