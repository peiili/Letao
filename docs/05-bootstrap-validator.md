### 常用事件
1. 重置某一单一验证字段验证规则
```js
$(formName).data(“bootstrapValidator”).updateStatus("fieldName",  "NOT_VALIDATED",  null );
```
2. 重置表单所有验证规则
```js
$(formName).data("bootstrapValidator").resetForm();
```
3. 手动触发表单验证
```js
//触发全部验证
$(formName).data(“bootstrapValidator”).validate();
//触发指定字段的验证
$(formName).data(“bootstrapValidator”).validate('fieldName');
```
4. 获取当前表单验证状态
```js
// flag = true/false 
var flag = $(formName).data(“bootstrapValidator”).isValid();
```
5. 根据指定字段名称获取验证对象
```js
// element = jq对象 / null
var element = $(formName).data(“bootstrapValidator”).getFieldElements('fieldName');
```

### 表单提交
1. 当提交按钮是普通按钮
手动触发表单验证 
示例：
```js
 $("buttonName").on("click", function(){
     //获取表单对象
    var bootstrapValidator = form.data('bootstrapValidator');
        //手动触发验证
        bootstrapValidator.validate();
        if(bootstrapValidator.isValid()){
            //表单提交的方法、比如ajax提交
        }
});
```
当提交按钮的[type=”submit”]时 
会在success之前自动触发表单验证
```js
var bootstrapValidator = form.data('bootstrapValidator');
bootstrapValidator.on('success.form.bv', function (e) {
    e.preventDefault();
    //提交逻辑
});
```

