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
  
  submitBooking: function (e) {
    let page = this;
    let start_date = this.data.start_date;
    let end_date = this.data.end_date;
    let game_id = this.data.game_id;

    //!IMPORTANT! user_id is the rentee's user_id
    let user_id = app.globalData.userId;

    console.log('current user id: ', user_id);
    let booking = {booking:{
      start_date: start_date,
      end_date: end_date,
      game_id: game_id,
      user_id: user_id,
      status: 0
    }};
    // send post request to api
    wx.request({
      url: `https://gamestation.herokuapp.com/api/v1/users/${user_id}/bookings`,
      method: 'POST',
      data: booking,
      success() {
        console.log('succeed');
        // wx.reLaunch({
        //   url: '/pages/home/home'
        // });
        wx.redirectTo({
          url: '../reservation/reservation'
        });
      }
    });
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
        const user = res.data.user.name;
        const avatar = res.data.user.avatar;
        const game_id = res.data.id;
        const user_id = res.data.user_id;
        page.setData({
          game_name: game_name,
          game_description: game_description,
          user: user,
          avatar: avatar,
          game_id: game_id,
          user_id: user_id
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



