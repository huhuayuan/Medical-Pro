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
          name:'张某某',
          hospital:'北京协议医院',
          department:'内科',
          time:'2017年6月6日',
          num:'001568',
          image: '../../images/doctor.png',
          age: 36
        },{
          name:'张某某',
          hospital:'北京协议医院',
          department:'内科',
          time:'2017年6月6日',
          num:'001568',
          image: '../../images/doctor.png',
          age: 36
        },{
          name:'张某某',
          hospital:'北京协议医院',
          department:'内科',
          time:'2017年6月6日',
          num:'001568',
          image: '../../images/doctor.png',
          age: 36
        },{
          name:'张某某',
          hospital:'北京协议医院',
          department:'内科',
          time:'2017年6月6日',
          num:'001568',
          image: '../../images/doctor.png',
          age: 36
        },{
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
