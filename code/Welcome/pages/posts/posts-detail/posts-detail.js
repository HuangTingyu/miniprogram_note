var postsData = require('../../../data/posts-data.js')
Page({
  onLoad:function(option){
    var postId = option.id;
    var postData = postsData.postList[postId]
    this.setData({ postData: postData })

    wx.setStorageSync('dkey', {
      name:"迪丽热巴",
      weibo:"@Dear-迪丽热巴"
    })

    wx.setStorageSync('gkey', {
      name: "高伟光",
      weibo: "@深情的高伟光"
    })
  },
  onCollectionTap:function(event){
    var name = wx.getStorageSync('dkey')
    console.log(name)
  },
  onShareTap:function(event){
    // wx.clearStorageSync()
    wx.removeStorage({
      key: 'gkey',
      success(res) {
        console.log(res)
      }
    })
  }
})