注意写`json`文件的时候，所有的一切都必须加上“双引号” ！“双引号”很重要，否则控制台会报错！

```
{
  "pages": [
    "pages/welcome/welcome",
    "pages/posts/posts",
    "pages/posts/posts-detail/posts-detail",
    "pages/movies/movies"
  ],
}
```

注意，逗号也不能随便加，这里只有一项，决不能加逗号

加了逗号必须有下一项，不能随随便便加逗号

否则，文件会报错

```
"requiredBackgroundModes": [
    "audio"
  ],
```

