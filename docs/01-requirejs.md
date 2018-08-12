### reqqire js介绍
> RequireJS是一个非常小巧的JavaScript模块载入框架，是AMD规范最好的实现者之一。最新版本的RequireJS压缩后只有14K，堪称非常轻量。它还同时可以和其他的框架协同工作，使用RequireJS必将使您的前端代码质量得以提升。

### require js 模块化编程
1. 正常编写代码
```html
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="a.js"></script>
    </head>
    <body>
      <span>body</span>
    </body>
</html>
```

```js
function fun1(){
  alert("it works");
}

fun1();
```

> 问题： 页面会一片空白， 因为js阻塞了线程
2. 使用require模块化编程
```html
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="require.js"></script>
        <script type="text/javascript">
            require(["a"]);
        </script>
    </head>
    <body>
      <span>body</span>
    </body>
</html>
```

```js
define(function(){
    function fun1(){
      alert("it works");
    }

    fun1();
})
```

3. 浏览器提示了"it works"，说明运行正确，但是有一点不一样，这次浏览器并不是一片空白，body已经出现在页面中，目前为止可以知道requirejs具有如下优点：
    1. 防止js加载阻塞页面渲染
    2. 使用程序调用的方式加载js，不会有大量的js的文件的引用

### 基本api
1. require会定义三个变量：define,require,requirejs，其中require === requirejs，一般使用require更简短
    - define 从名字就可以看出这个api是用来定义一个模块
    - require 加载依赖模块，并执行加载完后的回调函数

2. 前一篇中的a.js：
```js
define(function(){
    function fun1(){
      alert("it works");
    }

    fun1();
})


//通过define函数定义了一个模块，然后再页面中使用：
require(["js/a"]);
//来加载该模块(注意require中的依赖是一个数组，即使只有一个依赖，你也必须使用数组来定义)，require API的第二个参数是callback，一个function，是用来处理加载完毕后的逻辑，如：

require(["js/a"],function(){
    alert("load finished");
})

```

### 加载文件

1. 之前的例子中加载模块都是本地js，但是大部分情况下网页需要加载的JS可能来自本地服务器、其他网站或CDN，这样就不能通过这种方式来加载了，我们以加载一个jquery库为例：
```js
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"]   
    }
})
require(["jquery","js/a"],function($){
    $(function(){
        alert("load finished");  
    })
})
```

2. 这边涉及了require.config，require.config是用来配置模块加载位置，简单点说就是给模块起一个更短更好记的名字，比如将百度的jquery库地址标记为jquery，这样在require时只需要写["jquery"]就可以加载该js，本地的js我们也可以这样配置：

```js
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"],
        "a" : "js/a"   
    }
})
require(["jquery","a"],function($){
    $(function(){
        alert("load finished");  
    })
})
```

3. 通过paths的配置会使我们的模块名字更精炼，paths还有一个重要的功能，就是可以配置多个路径，如果远程cdn库没有加载成功，可以加载本地的库，如：

```js
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
        "a" : "js/a"   
    }
})
require(["jquery","a"],function($){
    $(function(){
        alert("load finished");  
    })
})
```

4. 注意两点
    - 在使用`requirejs`时，加载模块时不用写`.js`后缀的
    - 上面例子中的callback函数中发现有`$`参数，这个就是依赖的jquery模块的输出变量，如果你依赖多个模块，可以依次写入多个参数来使用


### 合局配置
1. 上面的例子中重复出现了require.config配置，如果每个页面中都加入配置，必然显得十分不雅，requirejs提供了一种叫"主数据"的功能，

2. 我们首先创建一个main.js：
```js
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
        "a" : "js/a"   
    }
})
```

3. 然后再页面中使用下面的方式来使用requirejs：
```js
<script data-main="js/main" src="js/require.js"></script>
```

4. 解释一下，加载requirejs脚本的script标签加入了data-main属性，这个属性指定的js将在加载完reuqire.js后处理，我们把require.config的配置加入到data-main后，就可以使每一个页面都使用这个配置，然后页面中就可以直接使用require来加载所有的短模块名。 data-main还有一个重要的功能，当script标签指定data-main属性时，require会默认的将data-main指定的js为根路径，是什么意思呢？如上面的data-main="js/main"设定后，我们在使用require(['jquery'])后(不配置jquery的paths)，require会自动加载js/jquery.js这个文件，而不是jquery.js，相当于默认配置了：
```js
require.config({
    baseUrl : "js"
})
```
