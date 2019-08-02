// pages/my/mySub/order/order.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: app.globalData.windowHeight,
    classTit: [
      {
        tit: '全部订单',
        sele: true,
      },
      {
        tit: '已完成',
        sele: false,
      },
      {
        tit: '未完成',
        sele: false,
      },
    ],
    list: [
      {
        orderid: '订单号：1234-5678-1234',
        time: '2019-07-25 11:12:09',
        add: '汇智金融总部',
        money: '3.00元',
        state: 1,
      },
      {
        orderid: '订单号：1234-5678-1234',
        time: '2019-07-25 11:12:09',
        add: '汇智金融总部',
        money: '3.00元',
        state: 2,
      },
      {
        orderid: '订单号：1234-5678-1234',
        time: '2019-07-25 11:12:09',
        add: '汇智金融总部',
        money: '3.00元',
        state: 1,
      },
      {
        orderid: '订单号：1234-5678-1234',
        time: '2019-07-25 11:12:09',
        add: '汇智金融总部',
        money: '3.00元',
        state: 1,
      },
      {
        orderid: '订单号：1234-5678-1234',
        time: '2019-07-25 11:12:09',
        add: '汇智金融总部',
        money: '3.00元',
        state: 2,
      },
      {
        orderid: '订单号：1234-5678-1234',
        time: '2019-07-25 11:12:09',
        add: '汇智金融总部',
        money: '3.00元',
        state: 1,
      },
      {
        orderid: '订单号：1234-5678-1234',
        time: '2019-07-25 11:12:09',
        add: '汇智金融总部',
        money: '3.00元',
        state: 1,
      },
      {
        orderid: '订单号：1234-5678-1234',
        time: '2019-07-25 11:12:09',
        add: '汇智金融总部',
        money: '3.00元',
        state: 2,
      },
      {
        orderid: '订单号：1234-5678-1234',
        time: '2019-07-25 11:12:09',
        add: '汇智金融总部',
        money: '3.00元',
        state: 1,
      },
      {
        orderid: '订单号：1234-5678-1234',
        time: '2019-07-25 11:12:09',
        add: '汇智金融总部',
        money: '3.00元',
        state: 1,
      },
      {
        orderid: '订单号：1234-5678-1234',
        time: '2019-07-25 11:12:09',
        add: '汇智金融总部',
        money: '3.00元',
        state: 2,
      },
      {
        orderid: '订单号：1234-5678-1234',
        time: '2019-07-25 11:12:09',
        add: '汇智金融总部',
        money: '3.00元',
        state: 1,
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单列表',
    })
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

  },

  /**
   * cell点击事件
   */
  cellClick: function(e) {
    console.log(e);
    wx.navigateTo({
      url: '../ordercon/ordercon',
    })
  }
})