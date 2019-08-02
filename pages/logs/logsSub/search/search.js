// pages/logs/logsSub/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lng: '',
    lat: '',
    list: [
      {
        sele: true,
        tit: '汇智金融企业总部A座(哈尔滨市道里)汇智金融企业总部A座(哈尔滨市道里)',
        subTit: '',
      },
      {
        sele: false,
        tit: '汇智金融企业总部B座',
        subTit: '黑龙江省哈尔滨市道里区群力第五大道汇智金融企业总部汇智金融企业总部A座(哈尔滨市道里)',
      },
      {
        sele: false,
        tit: '汇智金融企业总部B座',
        subTit: '黑龙江省哈尔滨市道里区群力第五大道汇智金融企业总部...',
      },
      {
        sele: false,
        tit: '汇智金融企业总部B座',
        subTit: '黑龙江省哈尔滨市道里区群力第五大道汇智金融企业总部',
      },
      {
        sele: false,
        tit: '汇智金融企业总部B座',
        subTit: '黑龙江省哈尔滨市道里区群力第五大道汇智金融企业总部',
      },
      {
        sele: false,
        tit: '汇智金融企业总部B座',
        subTit: '黑龙江省哈尔滨市道里区群力第五大道汇智金融企业总部...',
      },
      {
        sele: false,
        tit: '汇智金融企业总部B座',
        subTit: '黑龙江省哈尔滨市道里区群力第五大道汇智金融企业总部',
      },
      {
        sele: false,
        tit: '汇智金融企业总部B座',
        subTit: '黑龙江省哈尔滨市道里区群力第五大道汇智金融企业总部',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '位置',
    })
    this.onReady();
    let that = this;
    that.onReady();
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(res)
        that.setData({
          lat: res.latitude,
          lng: res.longitude,
        })
      },
    })


    wx.getSystemInfo({
      success: function (res) {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;
        let height = clientHeight * ratio;
        that.setData({
          height: height,
          width: clientWidth * ratio,
          controls: [{
            id: 0,
            iconPath: "../../../../static/images/icon_landmark.png",
            position: {
              left: res.windowWidth * 0.5 - 12,
              top:  252 * 0.5 - 19,
              width: 24,
              height: 38
            },
            clickable: true
          }]
        });
      }
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


  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map')
  },

  // 将地图中心移动到当前位置
  moveToLocation: function () {
    console.log('aaaaa');
    this.mapCtx.moveToLocation()
  },


  // 地图发生变化的时候，获取中间点，也就是用户选择的位置
  regionchange(e) {
    // 会有两次，一次start，一次end，一般情况下在移动结束后进行数据请求
    if (e.type == 'end') {
      // app.showLoading('正在搜索');
      this.getLngLat();
    }
  },


  // 获取中间点的经纬度，并mark出来
  getLngLat: function () {
    console.log('我走了')
    var that = this;
    that.mapCtx = wx.createMapContext("map"); // 如果有初始化mapCtx，这里可以省略
    that.mapCtx.getCenterLocation({
      success: function (res) {
        let curLatitude = res.latitude;
        let curLongitude = res.longitude;
        // 通过获取的经纬度进行请求数据
        console.log('通过获取的经纬度可以进行请求数据')
      }
    })
  },
})