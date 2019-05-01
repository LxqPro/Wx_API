//index.js
const app = getApp()

console.log(app);

Page({
  data: {
    user_name:'',
    user_schoolid:'',
    user_school:'',
    user_academy:'',
    user_avatarUrl:'user-unlogin.png',
//临时变量 
    temp_user_name: '',
    temp_user_schoolid: '',
    temp_user_school: '',
    temp_user_academy: '',

    school:[' ','重庆大学','清华大学','野鸡大学'],
    schoolindex:0,
    academy:[' ','大数据与软件学院','法学院','计算机学院','生物工程学院'],
    academyindex:0,

    completinfo: false, 
  },
  isLogin:false,      //是否登陆
     
//获取用户信息
  onGetUserinfo:function(e){
    if(this.data.isLogin==true){
      
    }else{
    this.setData({
      user_name: e.detail.userInfo.nickName,
      user_avatarUrl: e.detail.userInfo.avatarUrl,
      isLogin:true,
    });
    var app=getApp();
      app.user_name = e.detail.userInfo.nickName;
      app.user_avatarUrl = e.detail.userInfo.avatarUrl;
    }
  },




  onShow: function () {
    var app = getApp();

    this.setData({
    // 在页面展示之后先获取一次数据   
      user_school:app.globalData.user_school,
      user_academy:app.globalData.user_academy,
      user_name:app.globalData.user_name,
      user_schoolid:app.globalData.user_schoolid
    });

    //------------------从云端拉取此用户个人信息
    //云开发初始化
    wx.cloud.init({
      env: 'cqu-se-06class-f9b488', //确认云环境ID
      traceUser: true,
    })

    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('userInfo').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        this.setData({
          // 在页面展示之后先获取一次数据
          user_school: res.data[0].school,
          user_academy: res.data[0].academy,
          user_name: res.data[0].username,
          user_schoolid: res.data[0].studentID
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      },
    });

  },


})
