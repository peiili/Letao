### arttemplate 介绍
1. artTemplate 是新一代 javascript 模板引擎，它采用预编译方式让性能有了质的飞跃，并且充分利用 javascript 引擎特性，使得其性能无论在前端还是后端都有极其出色的表现

2. 除了性能优势外，调试功能也值得一提。模板调试器可以精确定位到引发渲染错误的模板语句，解决了编写模板过程中无法调试的痛苦，让开发变得高效，也避免了因为单个模板出错导致整个应用崩溃的情况发生。

### 快速上手
1. 定义template模板
    ```js
    <div id="content"></div>
    <script id="test" type="text/html">
        {{if isAdmin}}
            <h1>{{title}}</h1>
            <ul>
                {{each list as value i}}
                    <li>索引 {{i + 1}} ：{{value}}</li>
                {{/each}}
            </ul>
        {{/if}}
    </script>
    ```

2. 数据绑定
    ```js
    <script src="../dist/template.js"></script>
    <script>
        var data = {
            title: '基本例子',
            isAdmin: true,
            list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
        };
        var html = template('test', data);
        document.getElementById('content').innerHTML = html;
    </script>
    ```

### 语法
1. 显示属性
    ```html
    <h3> <span class=”{{title}}”></span></h3>
    ```
    > #代表属性不转义，会按照原始串输出，如果是标签会被解析成dom

2. 判断
    ```js
    //如果isAdmin是true
    {{if isAdmin}}
        <h1>{{title}}</h1>
    {{/if}}

    //如果isAdmin是true
    {{if isAdmin}}
        <h1>{{title}}</h1>
    {{else}}
        <div>{{message}}</div>
    {{/if}}

    //如果type == 1
    {{if type==1}}
        <h1>{{title}}</h1>
    {{/if}}
    ```

3. 循环
    1. 带索引
    ```js
    {{each list as value i}}
        <li>索引 {{i + 1}} ：{{value}}</li>
    {{/each}}
    ```

    2. 带索引
    ```js
    {{each list}}
        <li>索引 {{$index}} ：{{$value}}</li>
        {{include 'test' }}
    {{/each}}
    ```

    3. 遍历复杂结构
    ```js
    {{each data}}
        <tr>
            <td >{{$value.agent_name}}</td>
            <td >{{$value.agent_id}}</td>
            <td >{{$value.type}}</td>

            <td >
                {{each $value.items}}
                    <span>{{$value}}</span>
                {{/each}}
            <td>
    <tr>
    {{/each}}
    ```
### 方法
1. template(id, data)， 返回最后要显示的的html字符串
2. template.compile(source)，接收模板字符串， 返回一个函数，再调用render返回html字符串
3. render(data) 返回最终要显示的 html字符串

