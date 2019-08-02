// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //我的数据
    json: {
      imageUrl: "../../static/images/my_people.png",
    },

    listRow: [
      [
        {
          img: "../../static/images/my_deposit.png",
          tit: "我的押金",
        } 
      ], 
      [
        {
          img: "../../static/images/my_trade.png",
          tit: "交易明细",
        },
        {
          img: "../../static/images/my_order.png",
          tit: "我的订单",
        },
      ],
      [
        {
          img: "../../static/images/my_appeal.png",
          tit: "我要申诉",
        },
        {
          img: "../../static/images/my_idea.png",
          tit: "意见反馈",
        },
        {
          img: "../../static/images/my_about.png",
          tit: "关于我们",
        }
      ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人中心',
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
   * cell 点击事件
   */
  cellpush: function(e) {
    
    var mes = e.currentTarget.dataset.mes;
    console.log(mes);
    switch (mes) {
      case '我的押金': {
        wx.navigateTo({//提现申请/充值押金
          url: './mySub/deposit/deposit?tit=' + '提现申请',
        })
      }
      break; 
      case '交易明细': {
        wx.navigateTo({
          url: './mySub/transaction/transaction',
        })
      }
      break;
      case '我的订单': {
        wx.navigateTo({
          url: './mySub/order/order',
        })
      }
      break;
      case '我要申诉': {
        wx.navigateTo({
          url: './mySub/appeal/appeal',
        })
      }
      break;
      case '意见反馈': {
        wx.navigateTo({
          url: './mySub/feedback/feedback',
        })
      }
      break;
      case '关于我们': {
        wx.navigateTo({
          url: './mySub/about/about',
        })
      }
      break;
    }
  }
})