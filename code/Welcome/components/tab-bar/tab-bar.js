/*
 * @Author: sakurahuang
 * @Description: 
 * @Date: 2025-03-26 20:03:11
 */
// pages/tab-bar.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  // lifetimes: {
  //   async ready() {
  //     global.console = console
  //     await this.initGo()
  //   }
  // },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    list: [
          {
        "pagePath":"/postsPackages/pages/movies/movies",
        "text":"电影",
        "iconPath":"/images/tab/dianying.png",
        "selectedIconPath":"/images/tab/dianying_hl.png"
      },
      {
        "pagePath":"/postsPackages/pages/posts/posts",
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
    },
    // async initGo() {
    //   const go = new global.Go()
    //   try {
    //     const result = await WXWebAssembly.instantiate(wasmFile, go.importObject)
    //     console.log(`Go初始化成功: ${result}`)
    //     // 运行go程序的main方法，这里拿不到结果
    //     // go程序的main()方法退出前，小程序可以一直调用go程序的方法
    //     // go.run不能去掉
    //     await go.run(result.instance)
    //   } catch (err) {
    //     console.error('initGo error',err)
    //   }
    // },
    // testGo() {
    //   let flag = true
    //   let convertTimeStamp = ts => {
    //     flag = false
    //     global.getFormatedMiniSeconds(ts, res => {
    //       this.setData(res)
    //       flag = true
    //     })
    //   }
    //   this.intervalId = setInterval(() => {
    //     if (flag) {
    //       convertTimeStamp(600000-(Date.now()-startTime))
    //     }
    //   },300)

    // }
  }
})