## 新闻列表

### swiper组件

记住，不要给 `swiper-item` 加样式，这样是没有效果的。`swiper-item` 自动继承 `swiper` 的样式，宽高都为`100%` 。

```html
<view>
  <swiper>
    <swiper-item>
      <image src="/images/iqiyi.png"></image>
    </swiper-item>
    <swiper-item>
      <image src="/images/vr.png"></image>
    </swiper-item>
    <swiper-item>
      <image src="/images/wx.png"></image>
    </swiper-item>
  </swiper>
</view>
```

设置样式

```css
/* pages/posts/posts.wxss */
swiper{
    width:100%;
    height:500rpx;
}
swiper image{
    width:100%;
    height:500rpx; 
}
```

### 数据绑定概念和基础

通过在 `posts.js` 的 `data` 部分添加

```js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"December 6 2019"

  },
 }
```

`posts.wxml`  的使用

```html
<text class="posts_user_date">{{date}}</text>
```

### setData绑定数据

`posts.js` 使用 `setData` 绑定

```js
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
```

`posts.wxml` 应用

```html
<view class="posts_wrap">
    <view class="posts_user">
      <image src="/images/avatar/1.jpg" class="posts_user_img"></image>
      <text class="posts_user_date">{{date}}</text>
    </view>
    <text class="posts_title">{{title}}</text>
    <image src="{{post_img}}" class="posts_img"></image>
    <text class="posts_desc">{{content}}</text>
    <view class="posts_star">
      <image src="/images/icon/none-star.png" class="posts_star_img"></image>
      <text>{{collect_num}}</text>
      <image src="/images/icon/view.png" class="posts_star_img"></image>
      <text>{{view_num}}</text>
    </view>
  </view>
```

## 设置true/false属性

建议使用以下写法

```html
<swiper class="posts_swiper" indicator-dots="{{true}}" autoplay="{{false}}">
</swiper>
```

#### 注意

下面这种写法是无效的，依然会自动播放。因为，在JS中，字符串的`"false"` 相当于`true`

```
<swiper class="posts_swiper" autoplay="false">
</swiper>
```

解锁双花括号更多用法，请进入官方文档搜索 `数据绑定`

### 条件渲染、列表渲染

条件渲染

```
wx:if
```

列表渲染

`posts.wxml` 部分

```html
<block wx:for="{{posts_content}}" wx:for-item="item" wx:key="date">
    <view class="posts_wrap">
      <view class="posts_user">
        <image src="{{item.img.author_img}}" class="posts_user_img"></image>
        <text class="posts_user_date">{{item.date}}</text>
      </view>
      <text class="posts_title">{{item.title}}</text>
      <image src="{{item.img.post_img}}" class="posts_img"></image>
      <text class="posts_desc">{{item.content}}</text>
      <view class="posts_star">
        <image src="/images/icon/none-star.png" class="posts_star_img"></image>
        <text>{{item.collect_num}}</text>
        <image src="/images/icon/view.png" class="posts_star_img"></image>
        <text>{{item.view_num}}</text>
      </view>
    </view>
  </block>
```

`posts.js` 部分

```js
onLoad: function (options) {
    var posts_content = [{
      date: "December 6 2019",
      title:"罗云熙Leo",
      img:{
        post_img: "/images/post/leo1.jpg",
        author_img: "/images/avatar/1.jpg" 
      },
      content:"第一次尝试扎发带，心里莫名就有种玩什么游戏都能赢的气势（虽然好像也没有）",
      view_num:"112",
      collect_num:"96",
    },
    {
      date: "November 25 2019",
      title:"罗云熙Leo",
      img:{
        post_img: "/images/post/leo2.jpg",
        author_img: "/images/avatar/1.jpg" 
      },
      content:"#魔熙先生# #罗云熙魔熙先生# 关于成长，关于乡愁,每个人都有一个属于自己的故事重游故地，回忆如潮水般涌来,那是游子对家乡的呼唤@罗云熙Leo",
      view_num:"102",
      collect_num:"45",
    },
  ]
    this.setData({posts_content})
  },
```

### 模板使用

## template

只能复用`wxml` 和 `wxss` ，因此 `posts-item-template.wxml` 的JS逻辑，只能写在`posts.js` 里面。

#### wxml

`posts` 下面建一个 `posts-item` 文件夹，以及 `posts-item-template.wxml` ,`posts-item-template.wxss`

`posts-item-template.wxml`

```html
<template name="postItem">
</template>
```

`posts.wxml`引入

```html
  <import src="posts-item/posts-item-template.wxml" />
  <block wx:for="{{postsContent}}" wx:for-item="item" wx:key="date">
    <template is="postItem" data="{{item}}"></template>
  </block>
```

#### wxss

`posts.wxss`

```
@import "./posts-item/posts-item-template.wxss"
```

### 自定义组件

