/*
 * @Author: sakurahuang
 * @Description: 
 * @Date: 2025-03-10 16:35:01
 */
Page({
  onTap:function(){
    wx.navigateTo({
      url: '/postsPackages/pages/posts/posts',
      // url: '/postsPackages/pages/movies/movies'
    })
  },
  onReady: function(){
    // 不要这样写，会白屏
    // wx.navigateTo({
    //   url: '/postsPackages/pages/movies/movies',
    // })
  }
})