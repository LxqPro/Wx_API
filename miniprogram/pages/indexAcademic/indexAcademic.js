// pages/indexAcademic/indexAcademic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schoolName:'重庆大学',
    academyName:'大数据与软件学院',
    academyList:['大数据与软件学院','计算机学院','自动化学院','微电子与通信学院'],
    postList:[
      {
        poster:{
          imgurl:'/images/WTG.jpg',
          name:'王天岗'
        },
        credit: '2',
        cash:'2',
        status:'success',
        title:'看见我头像了吗，本人就是这么骚，欧耶！'
      },
      {
        poster: {
          imgurl: '/images/WTG.jpg',
          name: '冯焱华'
        },
        credit: '3',
        cash: '200',
        status: 'waiting',
        title: '我在荒郊野岭我快要生了，谁来救救我啊！'
      },
      {
        poster: {
          imgurl: '/images/WTG.jpg',
          name: '龙小秦'
        },
        credit: '2',
        cash: '1',
        status: 'success',
        title: '嘤嘤嘤'
      },
      {
        poster: {
          imgurl: '/images/WTG.jpg',
          name: '牟玥'
        },
        credit: '2',
        cash: '0',
        status: 'waiting',
        title: '酸脱羟基醇脱氢，钾钙钠镁铝，勒夏特列原理，你涨了六分，跟别人12分的差距就出来了。'
      },
      {
        poster: {
          imgurl: '/images/WTG.jpg',
          name: '凤凰传奇'
        },
        credit: '2',
        cash: '0',
        status: 'waiting',
        title: 'lakejfifajoeijf'
      },
      {
        poster: {
          imgurl: '/images/WTG.jpg',
          name: '迪杰斯特拉'
        },
        credit: '2',
        cash: '0',
        status: 'waiting',
        title: 'lakejfifajoeijf'
      }
    ]
  },

  /**
   * 选择学院更新数据
   */
  ensureSelect:function(e){
    this.setData({
      academyName:this.data.academyList[e.detail.value]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})