// pages/my/mySub/transaction/transaction.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: app.globalData.windowHeight,
    list: [
      {
        type: '1',  //1.充值  2.消费
        orderId: '订单号：1234-5678-1234',
        tit: '微信',
        money: '99.00',
        time: '2019-07-25 15:06:07',
      },
      {
        type: '2',
        orderId: '订单号：1234-5678-1234',
        tit: '微信',
        money: '99.00',
        time: '2019-07-25 15:06:07',
      },
      {
        type: '2',
        orderId: '订单号：1234-5678-1234',
        tit: '微信',
        money: '3.00',
        time: '2019-07-25 15:06:07',
      },
      {
        type: '1',
        orderId: '订单号：1234-5678-1234',
        tit: '微信',
        money: '199.00',
        time: '2019-07-25 15:06:07',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '交易明细',
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

  }
})