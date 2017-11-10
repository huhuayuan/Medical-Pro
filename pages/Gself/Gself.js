//doctorList.js 医生列表页面
//获取应用实例
var app = getApp()
Page({
  data: {
    myInfo:{
      name:'张某某',
      image: '../../images/doctor.png',
      sex: '男',
      tel: 18812345678,
      age: 36,
      myEarnings: 200,
      doctorEarnings: 200,
      billTotal: 10,
      bills: [
        {
          num: 123456,
          name:'感冒颗粒'
        },{
          num: 123456,
          name:'感冒颗粒'
        },{
          num: 123456,
          name:'感冒颗粒'
        }
      ]
    }
},
  onLoad: function(options) {
    let that = this;
    that.data.doctorId = options.doctorId;
    console.log(options);
    getApp().getDoctorInfo({doctorId: options.doctorId}, function(data) {
      that.setData({
          doctorInfo: data
      });
      console.log(data)
    });

  }
})
