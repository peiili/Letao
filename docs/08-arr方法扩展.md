### 获取数组某个元素的index
```js
//获取某个数组的index
Array.prototype.indexOf = function (val) {
    for(var i = 0; i < this.length; i++){
        if(this[i] == val){return i;}
    }
    return -1;
}
```

### 删除数组中某个元素
```js
//删除某个数组元素
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if(index > -1){this.splice(index,1);}
}
```

### 数组去重
```js
//去重
Array.prototype.norepeat = function () {
    var arr = this,
        result = [],
        i,
        j,
        len = arr.length;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                j = ++i;
            }
        }
        result.push(arr[i]);
    }
    return result;
}
```