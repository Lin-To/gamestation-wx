// pages/profile/profile.js

const app = getApp()


Page({

  /**
   * Page initial data
   */
  data: {
    months: [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC'
    ],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    // console.log(app)
    const userId = app.globalData.userId
    // console.log(userId)

    wx.request({
      url: `https://gamestation.herokuapp.com/api/v1/users/${userID}`,
      success: function (res) {
        console.log(res)
        page.setData({ games: res.data.games });
    }
  })
  },



  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  // getUserInfo: function (e) {
  //   let page = this
  //   console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    // console.log('globaldata', app.globalData)

    // 
    // page.setData({
    //   userInfo: e.detail.userInfo,
    //   name: e.detail.userInfo.nickName,
    //   avatar: e.detail.userInfo.avatarUrl

    // })

    // let name = e.detail.userInfo.nickName
    // let user = {
    //   name: name

})
