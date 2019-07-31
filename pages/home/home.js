// pages/home/home.js
Page({
  /**
   * Page initial data
   */
  data: {
    indicatorDots: true,
    imgUrls: [
      'https://images.unsplash.com/photo-1559984859-d568d6eeba0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1518908336710-4e1cf821d3d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1473&q=80',
      'https://images.unsplash.com/photo-1552871847-d81af14f486d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
      'https://images.unsplash.com/photo-1533702165324-66678e2069b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ]},

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this

    wx.request({
      // url: 'http://localhost:3000/api/v1/games',
      url: 'https://gamestation.herokuapp.com/api/v1/games',
      success: function (res) {
        console.log(res)
        page.setData({ games: res.data.games })
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

  goToShow: function (event) {
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/show/show`, 
    })
  },
})
// goToProfile: function() {
//   wx.switchTab({
//     url: '/pages/profile/profile',
//     wx: wx.showToast({
//     title: 'Success!',
//     })
//   })
// ),

//   goToHome: function() {
//     wx.switchTab({
//       url: '/pages/home/home',
//       wx: wx.showToast({
//         title: 'Success!',
//       })
//     })
// ),