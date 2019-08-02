// pages/logs/logsSub/help/help.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        sele: false,
        tit: '如何借用充电宝?',
        subtit: ['1.扫描机身二维码，确认要租借的设备。', '2.支付押金，便可租借。', '3.归还只需将充电宝插入机身，机身发出归还声音便归还成功。订单会自动结算，并将剩余押金退回用户。'],
      },
      {
        sele: false,
        tit: '为什么归还了充电宝，订单还显示租借状态? ',
        subtit: ['归还充电宝后，因为网络问题可能会有一两分钟的延迟，如果五分钟后仍然处于租借状态，请及时联系客服。如果客服未能及时回复，问题将于三个工作日处理，并将多扣除多金额全数返还。'],
      },
      {
        sele: false,
        tit: '押金怎么退还?',
        subtit: ['归还充电宝后，订单将自动处理并直接将押金扣取租借费用所剩余额全数退回。用户可手动提现押金，提现金额在五个工作日内退回用户账户。'],
      },
      {
        sele: false,
        tit: '如有其他问题发生客服不能即使回应怎么办?',
        subtit: ['因客服不能及时处理问题先不要慌张，可以联络该商户负责人反映问题并在联络客服中反映问题，我们承诺72小时内会妥善处理问题。用户所损失的金额如数退还，如有不便，敬请谅解!如果其他问题反应，我们会积极改善，接纳您的意见。'],
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '帮助中心',
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
   * 点击cell事件
   */
  cellpush: function(e) {
    console.log(e);
    var index = e.currentTarget.dataset.row;
    this.data.list[index].sele = !this.data.list[index].sele
    this.setData({
      list: this.data.list
    })

    console.log(this.data.list);
  }
})