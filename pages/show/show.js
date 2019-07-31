// pages/market/market.js
let app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    imgUrls: ["https://images.unsplash.com/photo-1559984859-d568d6eeba0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // fecth id of selected game from global data
    // set it to a variable
    // interpolate it at the end of the url
    
    let page = this
    let gameId = options.gameId
    // let game_id = app.globalData.id
    // console.log("id", game_id)
    wx.request({
      url: `https://gamestation.herokuapp.com/api/v1/games/${gameId}`,
      success: function (res) {
        console.log("res", res)
        const game_name = res.data.name;
        // console.log("game name",game_name)
        const game_description = res.data.description;
        page.setData({
           game_name: game_name,
          game_description: game_description
           });
        wx.hideToast();
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


