// pages/completeInform/completeInform.js


Page({
  data: {
    user_name: '',
    user_schoolid: '',
    user_school: '',
    user_academy: '',

    school: [' ', '重庆大学', '清华大学', '野鸡大学','甜蜜高校'],
    schoolindex: 0,
    academy: [' ', '大数据与软件学院', '法学院', '计算机学院', '生物工程学院','冯焱华学院'],
    academyindex: 0,

    //临时变量 
    temp_user_name: '',
    temp_user_schoolid: '',
    temp_user_school: '',
    temp_user_academy: '',
  },

//选择学校
  bindPickerSchool:function(e){
    this.setData({
      schoolindex: e.detail.value,
      temp_user_school: this.data.school[e.detail.value],
    })
     var app = getApp();
     app.globalData.schoolindex=e.detail.value;
    // app.globalData.user_school=this.data.school[e.detail.value];

  },

//姓名
  bindInputName:function(e){
    this.setData({
      temp_user_name:e.detail.value
    })
    
  },
  // 学号
  bindInputSchoolid:function(e){
    this.setData({
      temp_user_schoolid: e.detail.value
    })
  },
  //学院
  bindPickerAcademy:function(e){
    this.setData({
      academyindex: e.detail.value,
      temp_user_academy : this.data.academy[e.detail.value],
    })
     var app = getApp();
     app.globalData.academyindex=e.detail.value;
    // app.globalData.user_academy = this.data.academy[e.detail.value];
    
  },

  //保存信息
  SaveInfo:function(e){
    
    var that=this;
    wx.showModal({
      title: '提示',
      content: '确认修改信息',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          var app = getApp();
          if (that.data.temp_user_academy) {
            app.globalData.user_academy = that.data.temp_user_academy;
          }
          if (that.data.temp_user_schoolid) {
            app.globalData.user_schoolid = that.data.temp_user_schoolid;
          }
          if (that.data.temp_user_name) {
            app.globalData.user_name = that.data.temp_user_name;
          }
          if (that.data.temp_user_school) {
            app.globalData.user_school = that.data.temp_user_school;
          }
          // 保存信息后返回上1页面
          wx.navigateBack({
          })
        } else {//这里是点击了取消以后

        }
      }
    })
   
  },
  onShow: function () {
    var app = getApp();
    this.setData({
      // 在页面展示之后先获取一次数据
      user_school: app.globalData.user_school,
      user_academy: app.globalData.user_academy,
      user_name: app.globalData.user_name,
      user_schoolid: app.globalData.user_schoolid,
      schoolindex:app.globalData.schoolindex,
      academyindex:app.globalData.academyindex,
    });
    
  },
  
})