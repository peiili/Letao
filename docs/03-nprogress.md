### nprogress

1. 依赖于 jQuery (1.8版本及以上)，添加 nprogress.js 和 nprogress.css 到你的项目中。

### 方法
1. NProgress.start() — 显示进度条
2. NProgress.set(0.4) —设置百分比
3. NProgress.inc() — 增加一点点
4. NProgress.done() — 完成进度条

> 你也可以添加到你调用 Ajax 的地方！绑定它到 jQuery ajaxStart 和 ajaxStop 事件上

### 高级用法

1. 百分比：通过设置progress的百分比，调用 .set(n)来控制进度，其中n的取值范围为0-1。
```js
NProgress.set(0.0);  
NProgress.set(0.4);
NProgress.set(1.0); 
```

2. 递增：要让进度条增加，只要调用 .inc()。这会产生一个随机增量，但不会让进度条达到100%。此函数适用于图片加载或其他类似的文件加载。
```js
NProgress.inc();
```
3. 强制完成：通过传递 true 参数给done()，使进度条满格，即使它没有被显示。
```js
NProgress.done(true);
```

4. 配置, minimum：设置最低百分比
```js
NProgress.configure({minimum:0.1});
```

5. ease：调整动画设置，ease可传递CSS3缓冲动画字符串（如ease、linear、ease-in、ease-out、ease-in-out、cubic-bezier）。speed为动画速度（单位ms）。
```js
NProgress.configure({ease:'ease',speed:500});
```