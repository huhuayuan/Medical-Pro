//doctorList.js 医生列表页面
//获取应用实例
var app = getApp()
Page({
  data: {
    doctorId: {},
    doctorInfo: {}
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
