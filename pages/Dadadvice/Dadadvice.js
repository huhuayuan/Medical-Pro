// pages/Dadadvice/Dadadvice.js
Page({
  data: {
    navbar: ['患者列表', '新建医嘱'],
    currentTab: 1  ,
    sex : ['男','女'],
    sexTab : 0,
    search:{
      searchValue : '',
      showClearBtn : false
    },
    newAdvice:{
        name : '',
        sex: 0,
        age: null,
        mobile:null,
        code:null,
        sketch:'',
        details:'',
        prescription:[]
    },
    searchResult : [
      {
        id:'P000001',
        name:'王某某',
        age:28,
        sex:'女',
        time:'2017年6月6日',
        patientCase :'感冒发烧......',
        image: '../../images/case.png'
      },{
        id:'P000001',
        name:'王某某',
        age:28,
        sex:'女',
        time:'2017年6月6日',
        patientCase :'感冒发烧......',
        image: '../../images/case.png'
      },{
        id:'P000001',
        name:'王某某',
        age:28,
        sex:'女',
        time:'2017年6月6日',
        patientCase :'感冒发烧......',
        image: '../../images/case.png'
      }
    ]
  },
  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  sexTap: function(e){
    this.setData({
      sexTab: e.currentTarget.dataset.sex,
      'newAdvice.sex' : e.currentTarget.dataset.sex
    })
  },
  //输入姓名
  nameInput:function(e){
      this.setData({
         'newAdvice.name' : e.detail.value
      })
  },
  //输入年龄
  ageInput:function(e){
      this.setData({
         'newAdvice.age' : e.detail.value
      })
  },
  //输入年龄
  mobileInput:function(e){
      this.setData({
         'newAdvice.mobile' : e.detail.value
      })
  },
  //输入处方号
  codeInput:function(e){
      this.setData({
         'newAdvice.code' : e.detail.value
      })
  },
   //输入处方号
  sketchInput:function(e){
      this.setData({
         'newAdvice.sketch' : e.detail.value
      })
  },
   //输入处方号
  detailsInput:function(e){
      this.setData({
         'newAdvice.details' : e.detail.value
      })
  },
  //输入内容时
  searchActiveChangeinput : function(e){
    const val = e.detail.value;
      this.setData({
         'search.showClearBtn' : val != '' ? true : false,
         'search.searchValue' : val
      })
  },
  //点击清除搜索内容
  searchActiveChangeclear : function(e){
      this.setData({
         'search.showClearBtn' : false,
         'search.searchValue' : ''
      })
  },
  //点击聚集时
  focusSearch : function(){
      if(this.data.search.searchValue){
          this.setData({
            'search.showClearBtn' : true
          })
      }
  },
  //搜索提交
  searchSubmit : function(){
    const val = this.data.search.searchValue;
    if(val){
      const that = this,
            app = getApp();
      wx.showToast({
        title : '搜索中',
        icon : 'loading'
      });
      wx.request({
        url: app.globalData.API_URL + 'searchTeam',
        data: {
          keywords : val,
          user_id : app.globalData.myInfo.user_id
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          // success
          let searchResult = res.data.data;
          const len = searchResult.length;
          for(let i = 0; i < len; i++){
              searchResult[i]['team_avator'] = app.globalData.STATIC_SOURCE + searchResult[i]['team_avator'];
          }
          that.setData({
             searchResult : searchResult,
            'search.showClearBtn' : false,
          })
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
          wx.hideToast();
        }
      })
    }
  },
  onLoad:function(options){
    getApp().editDoctorTabBar();

    wx.request({
      url: 'https://URL',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
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
