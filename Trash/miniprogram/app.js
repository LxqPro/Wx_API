//app.js
App({
  globalData:{
    count:1
  },
  onLaunch:function(){
    this.globalData = {
      user_name: '',
      user_schoolid: '',
      user_school: '',
      user_academy: '',
      user_avatarUrl: '',
      // 学校学院变量
      schoolindex: 0,
      academyindex: 0,
    }   
  }
})
