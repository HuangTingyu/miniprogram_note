var postsData = require('../../../data/posts-data.js')
var app = getApp()
Page({
  data:{
    postId: ''
  },
  onLoad:function(option){
    const self = this
    var postId = option.id
    this.data.postId = postId
    var postData = postsData.postList[postId]
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    // console.log(app.globalData.g_isPlayingMusic)
    if (postId === app.globalData.g_postsDetailPostId){
      this.setData({
        postData: postData,
        isPlayingMusic: app.globalData.g_isPlayingMusic
      })
    } else {
      backgroundAudioManager.stop()
      app.globalData.g_postsDetailPostId = postId
      app.globalData.g_isPlayingMusic = false
      this.setData({
        postData: postData,
        isPlayingMusic: false
      })

    }
    
    

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

    

    backgroundAudioManager.onPlay(function(){
      app.globalData.g_isPlayingMusic = true
      self.setData({
        isPlayingMusic: true
      })
    })

    backgroundAudioManager.onPause(function () {
      app.globalData.g_isPlayingMusic = false
      self.setData({
        isPlayingMusic: false
      })
    })
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
  },
  onMusicTap:function(event){
    const self = this
    let isPlayingMusic = this.data.isPlayingMusic
    let postId = this.data.postId
    let postData = postsData.postList[postId]
    const backgroundAudioManager = wx.getBackgroundAudioManager()

    if(isPlayingMusic){
      wx.pauseBackgroundAudio()
      app.globalData.g_isPlayingMusic = false
      self.setData({
        isPlayingMusic: false
      })
    } else {
      backgroundAudioManager.title = postData.music.title
      backgroundAudioManager.epname = postData.music.title
      backgroundAudioManager.singer = postData.music.singer
      backgroundAudioManager.coverImgUrl = postData.music.coverImg
      // 设置了 src 之后会自动播放
      backgroundAudioManager.src = postData.music.url
      // backgroundAudioManager.play()

      app.globalData.g_isPlayingMusic = true
      self.setData({
        isPlayingMusic: true
      })
    }

    
  }
})