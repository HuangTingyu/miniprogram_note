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

