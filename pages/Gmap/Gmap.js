// pages/map/map.js
// 获取应用实例
var app = getApp();
Page({
  data: {
    marks: [
      {
        iconPath: "../../images/map-selected.png",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      },{
        iconPath: "../../images/map-selected.png",
        id: 0,
        latitude: 23.099994,
        longitude: 10,
        width: 50,
        height: 50
      }
    ]
  },
  getLocation: function(){
    var that = this;
      wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        location = {
          latitude: res.latitude,
          longitude: res.longitude,
        }
        that.setData({
          position: location
        });
      }
    })
  },
  onReady: function (){
    // 页面渲染完成
    this.getLocation(); // 定位
  }

})
