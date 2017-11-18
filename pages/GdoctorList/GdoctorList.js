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
      doctorLists: [
        {
          doctor_id: 0,
          name:'张某某',
          hospital:'北京协议医院',
          department:'内科',
          time:'2017年6月6日',
          num:'001568',
          image: '../../images/doctor.png',
          age: 36
        },{
          doctor_id: 1,
          name:'李某某',
          hospital:'北京协议医院',
          department:'内科',
          time:'2017年6月6日',
          num:'001568',
          image: '../../images/doctor.png',
          age: 36
        },{
          doctor_id: 2,
          name:'张某某',
          hospital:'北京协议医院',
          department:'内科',
          time:'2017年6月6日',
          num:'001568',
          image: '../../images/doctor.png',
          age: 36
        },{
          doctor_id: 3,
          name:'张某某',
          hospital:'北京协议医院',
          department:'内科',
          time:'2017年6月6日',
          num:'001568',
          image: '../../images/doctor.png',
          age: 36
        },{
          doctor_id: 4,
          name:'张某某',
          hospital:'北京协议医院',
          department:'内科',
          time:'2017年6月6日',
          num:'001568',
          image: '../../images/doctor.png',
          age: 36
        }
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
