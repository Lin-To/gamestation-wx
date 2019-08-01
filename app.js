
App({
  onLaunch: function () {
    const host = 'https://gamestation.herokuapp.com/api/v1/';
    console.log('beginning login');
    wx.login({
      success: (res) => {
        console.log(res)
        // insert next code here
        wx.request({
          url: host + 'login',
          method: 'post',
          data: {
            code: res.code
          },
          // insert next code here
          success: (res) => {
            console.log(res)
            this.globalData.userId = res.data.userId
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})


