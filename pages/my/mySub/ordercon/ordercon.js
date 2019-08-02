// pages/my/mySub/ordercon/ordercon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    json: {
      orderId: '1234-5678-1234',
      state: '2',
      pic: '3.00',
      time: '2019-07-25 13:50:24',
      add: '汇智金融总部',
      oldTime: '2019-07-25 13:50:58',
      type: '充电宝',
      oldAdd: '汇智金融总部',
      standard: '1元/1小时',
      duration: '2小时52分钟',
      rule: '自借出后开始及时，前10分钟内免费;超出部分按每1小时1元计费，不足1小时按1小时计算;每24小时20元封顶(该计费规则为订单计费规则，即租借时商家设定的计费规则，订单开始后计费规则不会改变)。'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单详情',
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