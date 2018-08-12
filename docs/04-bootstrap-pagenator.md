## HTML实现
```html
<!-- 分页插件 -->
<div class="pull-right">
    <ul id="paginator"></ul>
</div>
```

##JS实现
``` js
//分页插件需要ajax完成之后，获取到数据之后来调用
$("#paginator").bootstrapPaginator({
    bootstrapMajorVersion: 3,//指定bootstrap的版本，如果是3，必须指定
    currentPage: page,//指定当前页
    totalPages: Math.ceil(data.total / pageSize),//指定总页数
    size: "small",//设置控件的大小

    //当点击分页组件按钮会调用该方法
    //index参数，就代表当前点击的是第几页
    onPageClicked: function (a, b, c, index) {
      //page指的是点击的页码,修改了当前页
      page = index;

      //每一次点击都会去发起ajax请求，获取数据，渲染数据
      render();
    }
});
```
