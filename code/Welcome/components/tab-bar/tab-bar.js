// pages/tab-bar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    list: [
          {
        "pagePath":"/pages/movies/movies",
        "text":"电影",
        "iconPath":"/images/tab/dianying.png",
        "selectedIconPath":"/images/tab/dianying_hl.png"
      },
      {
        "pagePath":"/pages/posts/posts",
        "text":"文章",
        "iconPath": "/images/tab/yuedu.png",
        "selectedIconPath": "/images/tab/yuedu_hl.png"
      }
  ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    select(index) {
      this.setData({
        selected: index
      })
    },
    nav(e){
      const page = e.currentTarget.dataset.page;
      console.log(`nav:${page}`)
      wx.navigateTo({
        url: page
      })
      // nav
    }
  }
})