// pages/indexAcademic/indexAcademic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schoolName:'重庆大学',
    academyName:'大数据与软件学院',
    academyList:['大数据与软件学院','计算机学院','自动化学院','微电子与通信学院']
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