/*
 * @Author: sakurahuang
 * @Description: 
 * @Date: 2025-03-10 16:35:01
 */
Page({
  onTap:function(){
    wx.navigateTo({
      url: '/postsPackages/pages/posts/posts',
    })
  },
  onReady: function(){
    const tabBar = this.selectComponent('#tabBar')
    console.log('onReady')
    console.log(tabBar)
  }
})