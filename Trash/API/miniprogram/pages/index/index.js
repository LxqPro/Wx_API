//index.js
const app = getApp()
Page({
  data:{
    //三个导航项的序号
    num:0
  },
  //点击某个导航触发的事件
  navigateTo:function(e){
    // console.log(e);
    this.setData({
      num: e.currentTarget.dataset.num
    })
  },
  onShow:function(){
    //还原点击的样式
    this.setData({
      num:0
    })
  }
})
