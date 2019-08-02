
const app = getApp()

const util = require('../../utils/util.js')

var bottomHeight = 0;
var windowHeight = 0;
var windowWidth = 0;

Page({
  data: {
    advertisement:false,
    scale: 18,
    latitude: "",
    longitude: "",
    bittonV: true,//商家详情是否隐藏
    markers: [{
      iconPath: "../../static/images/icon_others.png",
      id: 0,
      latitude: 45.75597,
      longitude: 126.61596,
      width: 50,
      height: 50
    }],
    includePoints: [
      {
        // 纬度
        latitude: 45.75609,
        // 经度
        longitude: 126.61989,
      },
      {
        // 纬度
        latitude: 45.05609,
        // 经度
        longitude: 126.11989,
      },
    ],
  },


  onLoad: function () {
    let that = this;
    this.onReady();
    

    
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
            iconPath: "../../static/images/icon_landmark.png",
            position: {
              left: res.windowWidth * 0.5 - 12,
              top: res.windowHeight * 0.5 - 36,
              width: 24,
              height: 38
            },
            clickable: true
          }]
        });
      }
    })

    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log('换个地方打印的是啥值：' + res.latitude + '//' + res.longitude)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 18,
        })
        that.moveToLocation();
      },
    })

    
  },

  onShow: function() {
    // util.toast('每次驱动都需要走的吗');
    
  },

  markertap(e) {
    let that = this;
    let currentStatu = e.currentTarget.dataset.statu; // 当前弹窗open状态
    let marker = markersData.filter(function (marker) {
      return marker.id === e.markerId;
    });// 通过点击的marker的id在markerData中筛选出对应的信息
    this.util(currentStatu, marker[0]);
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


  /**
   * 点击地图时触发
   */
  bindtap: function(e) {
    console.log('点击地图时触发');
    console.log(e);
    if(!this.data.bittonV) {
      this.setData({
        bittonV: !this.data.bittonV
      })
    }
  },

  /**
   * 点击标记点时触发，会返回marker的id
   */
  bindmarkertap: function(e) {
    console.log('点击了标记点');
    console.log(e);
    this.setData({
      bittonV: !this.data.bittonV
    })
  },


  /**
   * 点击控件时触发，会返回control的id
   */
  bindcontroltap: function(e) {

  },

  /**
   * 点击标记点对应的气泡时触发，会返回marker的id
   */
  bindcallouttap: function(e) {

  },


  /**
   * 在地图渲染更新完成时触发
   */
  bindupdated: function(e) {

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
  getLngLat: function() {
    console.log('我走了')
    var that = this;
    that.mapCtx = wx.createMapContext("map"); // 如果有初始化mapCtx，这里可以省略
    that.mapCtx.getCenterLocation({
      success: function (res) {
        let curLatitude = res.latitude;
        let curLongitude = res.longitude;
        // 通过获取的经纬度进行请求数据
        console.log('通过获取的经纬度可以进行请求数据' + curLatitude + '//' + curLongitude)
      }
    })
  },

  /**
   * 点击地图poi点时触发
   */
  bindpoitap: function(e) {

  },

  /**
   * 回到定位点
   */
  selfLocationClick: function () {

  },

  /**
   * 隐藏广告事件
   */
  dissClick: function() {
    this.setData({
      advertisement: !this.data.advertisement,
    })
  },
  

  /**
   * 去我的事件
   */
  pushMyClick: function() {
    wx.navigateTo({
      url: '../my/my',
    })
  },

  /**
   * 搜索事件
   */
  searchLocationClick: function() {
    wx.navigateTo({
      url: 'logsSub/search/search',
    })
  },

  /**
   * 附近门店
   */
  storeClick: function() {
    wx.navigateTo({
      url: 'logsSub/store/store',
    })
  },

  /**
   * 帮助中心
   */
  helpClick: function() {
    wx.navigateTo({
      url: 'logsSub/help/help',
    })
  },

  /**
   * 扫一扫事件
   */
  getScancode: function () {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        var result = res.result;
        util.toast(result);
        console.log(result);
        _this.setData({
          result: result,

        })
      }
    })
  },


  /**
   * 点击店铺进入详情
   */
  shopClick: function() {
    this.setData({
      bittonV: !this.data.bittonV
    })
    wx.navigateTo({
      url: 'storecon/storecon',
    })
  }
})
