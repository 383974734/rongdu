//app.js
App({
  onLaunch: function () {

    wx.getSystemInfo({
      success: res => {
        //状态栏的高度
        this.globalData.height = res.statusBarHeight;
        console.log("状态栏的高度高度是多少：" + this.globalData.height);
        this.globalData.screenHeight = res.screenHeight;
        this.globalData.screenWidth = res.screenWidth;
        console.log("屏幕高度是多少：" + this.globalData.screenHeight);
        this.globalData.windowHeight = res.windowHeight;
      }, fail(err) {
        console.log(err);
      }
    })
    
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log('登录成功后返回：' + res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              if (res.authSetting['scope.userLocation']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                wx.getLocation({
                  success: function (res) {
                    console.log('微信授权地理位置' + res);
                  },
                })
              }
              console.log('获取用户信息授权信息' + res);
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    share: false,  // 分享默认为false
    height: 0,//状态栏的高度
    screenHeight: 0,//屏幕高度
    screenWidth: 0, //屏幕宽度
    windowHeight: 0,//可使用窗口高度
  }
})