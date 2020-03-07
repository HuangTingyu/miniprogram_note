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

`posts-detail.js` 使用 `setData` 绑定

```js
var postsData = require('../../../data/posts-data.js')
Page({
  onLoad:function(option){
    var postId = option.id;
    var postData = postsData.postList[postId]
    this.setData({ postData: postData })
  }
})
```

`posts-detail.wxml` 应用

```html
<view class="posts_detail_wrap">
  <image src="{{postData.headImgSrc}}" class="posts_detail_head_img"></image>
  <image src="/images/music/music-start.png" class="posts_detail_head_audio"></image>
  <view class="posts_detail_avatar_wrap">
    <image src="{{postData.img.author_img}}" class="posts_detail_avatar"></image>
    <text class="posts_detail_avatar_text">{{postData.author}}</text>
    <text class="posts_detail_avatar_text">发表于</text>
    <text class="posts_detail_avatar_text">{{postData.dateTime}}</text>
  </view>
  <text class="posts-detail-title">
    {{postData.title}}
  </text>
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

```
wx:for
```

`posts.wxml` 部分

```html
<block wx:for="{{postsContent}}" wx:for-item="item" wx:key="date">
    <view bindtap="onPostTap" data-postId="{{item.postId}}">
       <template is="postItem" data="{{...item}}"></template>
    </view>
 </block>
```

`posts.js` 部分

```js
onLoad: function (options) {
      this.setData({ postsContent:postsData.postList})
  },
```

### 模板使用

### template

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
    <view bindtap="onPostTap" data-postId="{{item.postId}}">
       <template is="postItem" data="{{...item}}"></template>
    </view>
  </block>
```

这里的 `is` 是指定引用`name ` 为`postItem` 的模板

#### wxss

`posts.wxss`

```
@import "./posts-item/posts-item-template.wxss"
```

### 对象的平铺

加上三个点之后

```
<template is="postItem" data="{{...item}}"></template>
```

在子组件使用数据的使用，就不必再写 `item.xxx` , 例如下面的代码

```
<text class="posts_user_date">{{item.date}}</text>
```

可以改写为

```
<text class="posts_user_date">{{date}}</text>
```



