$(function () {

    //验证表单
    //使用表单校验插件
    //获取表单
    $("form").bootstrapValidator({
        //1. 指定不校验的类型，默认为[':disabled', ':hidden', ':not(:visible)'],可以不设置
        // excluded: [':disabled', ':hidden', ':not(:visible)'],

        //2. 指定校验时的图标显示，默认是bootstrap风格
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        //3. 指定校验字段
        fields: {
            //校验用户名，对应name表单的name属性
            //验证账号
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 4,
                        max: 10,
                        message: '用户名长度必须在到10之间'
                    },
                    //正则校验
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '用户名由数字字母下划线和.组成'
                    },
                    //自定义字段
                    callback: {
                        message:"用户名错误",
                    }
                }
            },
            //验证密码
            password: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 6,
                        max: 11,
                        message: '密码长度至少6位'
                    },
                    callback: {
                        message: '密码错误,请重新输入',
                    }

                }
            },
        }

    });

    //点击登陆按钮,出发表单提交事件;

    //表达按验证成功
    $("form").on('success.form.bv', function (e) {
        e.preventDefault();

        //使用ajax提交逻辑
        $.ajax({
            url: "/employee/employeeLogin",
            type: 'post',
            data: $('form').serialize(),
            success: function (res) {
                if (res.success) {
                    //判断本地是否有连接储存;如果有值,就按照园路进行返回,如果没有值,就直接跳转到主页;

                    var href = window.sessionStorage.getItem('href');

                    if (href) {
                        //如果有值就直接跳转;
                        window.location.href = window.sessionStorage.getItem('href');
                        //跳转后清空本地sessionStorage
                        window.sessionStorage.removeItem('href');
                    } else {
                        //如果没有sessionStorage,则直接跳转到首页;
                        window.location.href = "index.html"
                    }
                }
                if (res.error == 1000) {
                    var validator = $('form').data("bootstrapValidator");
                    //更新input的状态
                    //用户名错误,添加新的验证字段callback和内容;
                    // - NOT_VALIDATED：未校验的
                    // - VALIDATING：校验中的
                    // - INVALID ：校验失败的
                    // - VALID：校验成功的。
                    validator.updateStatus("username", "INVALID", "callback");
                }
                if(res.error == 1001){
                    var validator = $('form').data("bootstrapValidator");
                    validator.updateStatus("password", "INVALID", "callback");
                }

            }

        })
    });


})