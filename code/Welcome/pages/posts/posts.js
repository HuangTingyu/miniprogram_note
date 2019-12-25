// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"December 6 2019"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content = {
      date: "December 6 2019",
      title:"罗云熙Leo",
      post_img: "/images/post/leo1.jpg",
      content:"第一次尝试扎发带，心里莫名就有种玩什么游戏都能赢的气势（虽然好像也没有）",
      view_num:"112",
      collect_num:"96",
      author_img: "/images/avatar/1.jpg" 
    }
    this.setData(post_content)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})