// pages/logs/logsSub/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    json: [
      {
        id: '',
        img: '../../../../static/images/store_img.png',
        tit: '汇智金融总部汇智金融总部汇智金融总部汇智金融总部',
        day: '周一至周日',
        time: '00：00-23：00',
        add: '哈西大姐35号',
        borrow: '0',
        still: '0',
      },
      {
        id: '',
        img: '../../../../static/images/store_img.png',
        tit: '汇智金融总部',
        day: '周一至周日',
        time: '00：00-23：00',
        add: '哈西大姐35号',
        borrow: '0',
        still: '0',
      },
      {
        id: '',
        img: '../../../../static/images/store_img.png',
        tit: '汇智金融总部',
        day: '周一至周日',
        time: '00：00-23：00',
        add: '哈西大姐35号',
        borrow: '0',
        still: '0',
      },
      {
        id: '',
        img: '../../../../static/images/store_img.png',
        tit: '汇智金融总部',
        day: '周一至周日',
        time: '00：00-23：00',
        add: '哈西大姐35号',
        borrow: '0',
        still: '0',
      },
      {
        id: '',
        img: '../../../../static/images/store_img.png',
        tit: '汇智金融总部',
        day: '周一至周日',
        time: '00：00-23：00',
        add: '哈西大姐35号',
        borrow: '0',
        still: '0',
      },
      {
        id: '',
        img: '../../../../static/images/store_img.png',
        tit: '汇智金融总部',
        day: '周一至周日',
        time: '00：00-23：00',
        add: '哈西大姐35号',
        borrow: '0',
        still: '0',
      },
      {
        id: '',
        img: '../../../../static/images/store_img.png',
        tit: '汇智金融总部',
        day: '周一至周日',
        time: '00：00-23：00',
        add: '哈西大姐35号',
        borrow: '0',
        still: '0',
      },
      {
        id: '',
        img: '../../../../static/images/store_img.png',
        tit: '汇智金融总部',
        day: '周一至周日',
        time: '00：00-23：00',
        add: '哈西大姐35号',
        borrow: '0',
        still: '0',
      },
      {
        id: '',
        img: '../../../../static/images/store_img.png',
        tit: '汇智金融总部',
        day: '周一至周日',
        time: '00：00-23：00',
        add: '哈西大姐35号',
        borrow: '0',
        still: '0',
      },
      {
        id: '',
        img: '../../../../static/images/store_img.png',
        tit: '汇智金融总部',
        day: '周一至周日',
        time: '00：00-23：00',
        add: '哈西大姐35号',
        borrow: '0',
        still: '0',
      },
      {
        id: '',
        img: '../../../../static/images/store_img.png',
        tit: '汇智金融总部',
        day: '周一至周日',
        time: '00：00-23：00',
        add: '哈西大姐35号',
        borrow: '0',
        still: '0',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '附近门店',
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

  cellPush: function() {
    wx.navigateTo({
      url: '../storecon/storecon',
    })
  }
})