// pages/scan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload')
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
   * 点击事件
   */
  click: function () {
    var that = this;
    var region;
    var address;
    wx.scanCode({
      success: (res) => {
        wx.getLocation({
          type: 'gcj02',
          success: function(res) {
            const latitude = res.latitude
            const longitude = res.longitude
            wx.chooseLocation({
              latitude: latitude,
              longitude: longitude,
              success: function(res) {
                // var address = res.address

                console.log(res);
              },
              fail: function(){

              },
              complete: function(){

              }
            })
          },
        })
        this.region = address;
        that.setData({
          region: this.region

        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  }
})