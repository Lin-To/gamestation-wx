// pages/market/market.js
Page({

  /**
   * Page initial data
   */
  data: {
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },

    items: [
      {name: 'Game', value: 'Game'},
      {name: 'Console', value: 'Console'},
    ]
  },

  bindDateChange: function(e) {
    console.log('picker send selection modified. The carry value is ', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  onInput(event) {
    this.setData({
      currentDate: event.detail
    });
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

  }
})
