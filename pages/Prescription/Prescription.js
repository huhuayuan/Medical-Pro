// pages/DmyProfit/DmyProfit.js
Page({
  data:{
    tabs:['我的处方','未取药处方','我的医生'],
    activeIndex: 0,
    myInfo:{
      prescriptions: [
        {
          num: '012345',
          status: '已取药',
          desc: '感冒发烧',
          detail: '感冒发烧',
          info: '药品***',
          time: '2017-01-08 15:02:20'
        },{
          num: '012345',
          status: '未取药',
          desc: '感冒发烧',
          detail: '感冒发烧',
          info: '药品***',
          time: '2017-01-08 15:02:20'
        }
      ],
      noPrescriptions: [
        {
          num: '012345',
          status: '已取药',
          desc: '感冒发烧',
          detail: '感冒发烧',
          info: '药品***',
          time: '2017-01-08 15:02:20'
        },{
          num: '012345',
          status: '未取药',
          desc: '感冒发烧',
          detail: '感冒发烧',
          info: '药品***',
          time: '2017-01-08 15:02:20'
        }
      ]
    },
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
    ]
  },
  tabClick: function(e){
    this.setData({
      activeIndex: e.currentTarget.id
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  doctordetail: function(e){
    var doctorId = e.currentTarget.dataset.doctorId;
    //打开详情页
    // wx.navigateTo({
    //     url: '../GdoctorDetail/GdoctorDetail?doctorId=' + doctorId,
    // })
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
