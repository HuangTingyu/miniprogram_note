var postsData = require('../../../data/posts-data.js')
Page({
  data:{
    postId: ''
  },
  onLoad:function(option){
    var postId = option.id;
    this.data.postId = postId;
    var postData = postsData.postList[postId]
    this.setData({ postData: postData })

    var postsCollected = wx.getStorageSync('posts_collected')
    if(postsCollected){
      var postCollected = postsCollected[postId]
      if(postCollected){
        this.setData({
          collected: postCollected
        })
      }
    } else {
      var postsCollected = {}
      postsCollected[postId] = false
      wx.setStorageSync('posts_collected',postsCollected)
    }
  },
  onCollectionTap:function(event){
    var postsCollected = wx.getStorageSync('posts_collected')
    // console.log(this.data.postId)
    var postCollected = postsCollected[this.data.postId]
    postCollected = !postCollected
    postsCollected[this.data.postId] = postCollected
    // 更新文章是否的缓存值
    wx.setStorageSync('posts_collected',postsCollected)
    // 更新数据绑定变量，切换图片
    this.setData({
      collected:postCollected
    })

    wx.showToast({
      title: postCollected?'收藏成功':'取消成功',
      icon: 'success',
      duration: 1000
    })
    // var self = this;

    // wx.showModal({
    //   title: '收藏',
    //   content: postCollected?'是否收藏?':'是否取消收藏?',
    //   showCancel:"true",
    //   cancelText:"取消",
    //   cancelColor:"#333",
    //   confirmText:"确认",
    //   confirmColor:"#405f80",
    //   success:function(res){
    //     if(res.confirm){
    //       wx.setStorageSync('posts_collected', postsCollected)
    //       self.setData({
    //         collected:postCollected
    //       })
    //     }
    //   }
    // })
  },
  onShareTap:function(event){
    console.log('share')
  }
})