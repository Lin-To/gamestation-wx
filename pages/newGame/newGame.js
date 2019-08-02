const app = getApp();

// pages/newGame/newGame.js
Page({

  /**
   * Page initial data
   */
  data: {
    game_select: null,
    currentDate: new Date().getTime(),

    platform: [
      'Xbox One',
      'PlayStation 3',
      'PlayStation 4',
      'PlayStation Portable',
      'PC',
      'Nintendo DS',
      'Nintendo 3DS',
      'Nintendo 64',
      'Xbox 360',
      'Nintendo Entertainment System',
      'Nintendo Switch'
    ],
    platformArray: [
      {
        id: 0,
        name: 'Xbox One'
      },
      {
        id: 1,
        name: 'PlayStation 3'
      },
      {
        id: 2,
        name: 'PlayStation 4'
      },
      {
        id: 3,
        name: 'PlayStation Portable'
      },
      {
        id: 4,
        name: 'PC'
      },
      {
        id: 5,
        name: 'Nintendo DS'
      },
      {
        id: 6,
        name: 'Nintendo 3DS'
      },
      {
        id: 7,
        name: 'Nintendo 64'
      },
      {
        id: 8,
        name: 'Xbox 360'
      },
      {
        id: 9,
        name: 'Nintendo Entertainment System'
      },
      {
        id: 10,
        name: 'Nintendo Switch'
      },
    ],
    index: 0,

    items: [
      { name: 'Game', value: 'Game' },
      { name: 'Console', value: 'Console' },
    ]
  },

  bindStartDateChange: function(e) {
    console.log('picker send selection modified. The carry value is ', e.detail.value)
    this.setData({
      start_date: e.detail.value
    })
  },
  bindEndDateChange: function(e) {
    console.log('picker send selection modified. The carry value is ', e.detail.value)
    this.setData({
      end_date: e.detail.value
    })
  },

  gameOrConsole: function (e){
    console.log(e.detail.value);
    let selection = e.detail.value;
    this.setData({
      game_select: selection
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('newGame-userId', app.globalData.userId)
  },

  submitForm: function (e) {
    let name = e.detail.value.name;
    let description = e.detail.value.description;
    let gameType = e.detail.value.game == "game";
    let edition = e.detail.value.edition;
    // need a user_id in order to make the post request
    let user_id = app.globalData.userId;

    let game = {game: { name: name, description: description, game: gameType, edition: edition, user_id: user_id }};

    console.log(game);
    wx.request({
      url: 'https://gamestation.herokuapp.com/api/v1/games',
      method: 'POST',
      data: game,
      success() {
        wx.reLaunch({
          url: '/pages/home/home'
        });
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

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})
