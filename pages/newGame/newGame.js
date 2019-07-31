const app = getApp();

// pages/newGame/newGame.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('userId', app.globalData.userId)
  },

  submitForm: function (e) {
    let name = e.detail.value.name;
    let description = e.detail.value.description;
    let gameType = e.detail.value.game == "game";
    let edition = e.detail.value.edition;
    // need a user_id in order to make the post request
    let user_id = app.globalData.userId;
    console.log(22, user_id)

    let game = {game: { name: name, description: description, game: gameType, edition: edition, user_id: user_id }};

    console.log(game);
    wx.request({
      url: 'https://gamestation.herokuapp.com/api/v1/games',
      method: 'POST',
      data: game,
      success: function (res) {
        wx.redirectTo({
          url: '/pages/home/home',
        })
      }, 
      fail: function(res) {
        console.log(6, res)
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

  }
})