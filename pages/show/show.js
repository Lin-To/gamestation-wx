// pages/market/market.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    imgUrls: ["https://images.unsplash.com/photo-1559984859-d568d6eeba0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"],
    loading: false,
  },
  // Form Submission
  bindFormSubmit: function (e) {
    // Local storage
    var review = e.detail.value.review
  },
  bindDateStartChange: function (e) {
    console.log('picker startdate value', e.detail.value)
    this.setData({
      start_date: e.detail.value 
      })
  },
  bindDateEndChange: function (e) {
    console.log('picker end date value', e.detail.value)
    this.setData({
      end_date: e.detail.value
    })
  }, 
  
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    let gameId = options.gameId
    wx.request({
      url: `https://gamestation.herokuapp.com/api/v1/games/${gameId}`,
      success: function (res) {
        console.log("res", res)
        const game_name = res.data.name;
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

  },
  
})



