//doctorList.js 医生列表页面
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
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

    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

  },
  openMap: function () {
    wx.navigateTo({
      url: '../Gmap/Gmap'
    })
  },
  logout: function(){
    wx.navigateTo({
      url: '../login/login'
    })
  }

  // openMap:function(){
  //   wx.getLocation({
  //     type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
  //     success: function(res){
  //       // success
  //       wx.openLocation({
  //         latitude: res.latitude, // 纬度，范围为-90~90，负数表示南纬
  //         longitude: res.longitude, // 经度，范围为-180~180，负数表示西经
  //         scale: 28, // 缩放比例
  //       })
  //     }
  //   })
  // }
})
