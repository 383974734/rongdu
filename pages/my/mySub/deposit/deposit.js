// pages/my/mySub/deposit/deposit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titOne: '订单完成后，请至个人中心-我的押金中申请',
    titTwo: '预计5个工作日退还到原支付账户，平均时长3分钟。',
    titTwoS: '设备归还后扣除订单费用，自动返还押金',
    titThree: '预计0-5个工作日退还到原支付账户，平均时长3分钟。',
    tit: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var titT = options.tit;
    this.setData({
      tit: titT
    })
    wx.setNavigationBarTitle({
      title: this.data.tit//'充值押金',
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
   * 按钮点击事件
   */
  btnClick: function() {
    if (this.data.tit == "提现申请") {
      wx.navigateTo({
        url: '../progress/progress',
      })
    }
  }
})