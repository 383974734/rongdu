// pages/my/mySub/feedback/feedback.js   
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      {
        type: false,
        src: '../../../../static/images/feedback_photo.png'
      },
      {
        type: true,
        src: ''
      },
      {
        type: true,
        src: ''
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '意见反馈',
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
   * 上传图片按钮
   */

  //点击图片选择手机相册或者电脑本gtrtgrf地图片
  changeAvatar: function (e) {

    var than = this;
    wx.chooseImage({
      count: 1,// 默认9
      sizeType: ['original', 'compressed'],// 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],// 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // wx.showLoading({
        //   title: '玩命加载中',
        // })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        than.setImagesData(tempFilePaths[0])

        // util.requestPostFile(api.getUpload, tempFilePaths[0]).then(
        //   res => {
        //     // 隐藏加载框
        //     wx.hideLoading();
        //     console.log(res);
        //     console.log(res.data);
        //     console.log(JSON.parse(res.data))
        //     var json = JSON.parse(res.data)
        //     if (json.success && json.code == 200) {
        //       //成功
        //       console.log("接口是否走成功了");
        //       than.setData({
        //         'user.avatar': json.data
        //       })
        //       console.log(than.user.avatar);
        //     } else {

        //       //失败了
        //       util.toast(json.message);
        //     }
        //   }
        // )
      }
    })
  },

  setImagesData: function(e) {
    console.log(e);
    if (this.data.images[2].type && this.data.images[1].type) {
      console.log('一个元素')
      this.data.images[0].type = false;
      this.data.images[0].src = e;
      this.data.images[1].type = false;
      this.data.images[1].src = '../../../../static/images/feedback_photo.png';
      this.setData({
        images: this.data.images
      })
    }else if (this.data.images[2].type && !this.data.images[1].type && !this.data.images[0].type) {
      console.log('二个元素')
      this.data.images[1].type = false;
      this.data.images[1].src = e;
      this.data.images[2].type = false;
      this.data.images[2].src = '../../../../static/images/feedback_photo.png';
      this.setData({
        images: this.data.images
      })
    }else {
      this.data.images[2].type = false;
      this.data.images[2].src = e;
      this.setData({
        images: this.data.images
      })
    }
    console.log(this.data.images);
    console.log('数组长度：' + this.data.images.length);
  },

  // 删除当前图片
  dissClick: function(e) {
    console.log(e);
    console.log(e.currentTarget.dataset.index);
    var tag = e.currentTarget.dataset.index;
    
    if (tag == 0) {
      if (this.data.images[2].type) {
        console.log('第一张是图片，第二张是相机，第三张隐藏， 删除第一个')

        this.data.images[0].type = false;
        this.data.images[0].src = '../../../../static/images/feedback_photo.png';
        this.data.images[1].type = true;
        this.data.images[1].src = '';
        this.setData({
          images: this.data.images
        })

      } else if (!this.data.images[2].type && this.data.images[2].src == '../../../../static/images/feedback_photo.png') {
        console.log('第一张是图片，第二张是图片，第三张是相机，删除第一个')
        this.data.images[0].type = this.data.images[1].type;
        this.data.images[0].src = this.data.images[1].src;
        this.data.images[1].type = false;
        this.data.images[1].src = '../../../../static/images/feedback_photo.png';
        this.data.images[2].type = true;
        this.data.images[2].src = '';
        this.setData({
          images: this.data.images
        })

      }else {
        console.log('第一张是图片，第二张是图片，第三张是图片，删除第一个')
        this.data.images[0].type = false;
        this.data.images[0].src = this.data.images[1].src;
        this.data.images[1].type = false;
        this.data.images[1].src = this.data.images[2].src;
        this.data.images[2].type = false;
        this.data.images[2].src = '../../../../static/images/feedback_photo.png';
        this.setData({
          images: this.data.images
        })
      }
    }
    if (tag == 1) {
      if (this.data.images[2].src == '../../../../static/images/feedback_photo.png') {
        console.log('第三张是相机，删除第二个')
        this.data.images[1].type = false;
        this.data.images[1].src = '../../../../static/images/feedback_photo.png';
        this.data.images[2].type = true;
        this.data.images[2].src = '';
        this.setData({
          images: this.data.images
        })

      } else {
        console.log('第三张是图片，删除第二个')
        this.data.images[1].type = false;
        this.data.images[1].src = this.data.images[2].src;
        this.data.images[2].type = false;
        this.data.images[2].src = '../../../../static/images/feedback_photo.png';
        this.setData({
          images: this.data.images
        })
      }
    }
    if (tag == 2) {
      console.log('删除第三张图片')
      this.data.images[2].type = false;
      this.data.images[2].src = '../../../../static/images/feedback_photo.png';
      this.setData({
        images: this.data.images
      })
    }
  }
})