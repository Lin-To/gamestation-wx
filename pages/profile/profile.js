
// pages/profile/profile.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: null
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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

  goToRentals: function () {
    console.log("going to the rentals now..");
    wx.navigateTo({
      url: '../rentals/rentals',
    })
  },

  goToAdd: function (event) {
    wx.navigateTo({
      url: '/pages/newGame/newGame'
    })
  },

  goToBookings: function (event) {
    wx.navigateTo({
      url: '../reservation/reservation'
    })
  },

  goToMyGames: function (event) {
    wx.navigateTo({
      url: '../all_my_games/all_my_games'
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    console.log('globaldata', app.globalData)

    let page = this
    page.setData({
      userInfo: e.detail.userInfo,
      name: e.detail.userInfo.nickName,
      avatar: e.detail.userInfo.avatarUrl
    })

    let name = e.detail.userInfo.nickName

    let user = {
      name: name
    }

    wx.request({
      // url: `http://localhost:3000/api/v1/users`,
      url: `https://gamestation.herokuapp.com/api/v1/users`,
      method: 'POST',
      data: user,
      success(res) {
        console.log(res)
      }
    });
  }, 
})