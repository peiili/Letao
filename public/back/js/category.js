$(function () {
    var page = 1;
    var pageSize = 3;


    //获取数据,并进行分页,
    function render(pg, ps) {
        $.ajax({
            url: "/category/queryTopCategoryPaging",
            type: "get",
            data: {
                "page": pg,
                "pageSize": ps
            },
            success: function (data) {
                $("#paginator").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //指定bootstrap的版本，如果是3，必须指定
                    currentPage: page, //指定当前页
                    totalPages: Math.ceil(data.total / pageSize), //指定总页数
                    onPageClicked: function (a, b, c, index) {
                        //page指的是点击的页码,修改了当前页
                        page = index;
                        //重新渲染
                        render(page, pageSize);
                    }
                });


                var html = template("test", data);
                $("#user-management").html(html);
            }
        });
    }
    render(page, pageSize);


    //点击提交按钮,提交数据,并关闭模态框
    $('.up-load').click(function () {
        
        $('form').submit();
        console.log($("form").serialize());


    });


    //表单验证;
    var $form = $("form");
    $form.bootstrapValidator({
        //1. 设置验证状态对应的小图标
        feedbackIcons: {
            //如果验证通过，显示的小图标
            valid: 'glyphicon glyphicon-ok',
            //验证不通过
            invalid: 'glyphicon glyphicon-remove',
            //正在验证的状态
            validating: 'glyphicon glyphicon-refresh'
        },

        fields: {
            //表单中要验证表单的neme;
            categoryName: {
                validators: {
                    //添加规则,输入框不能为空
                    notEmpty: {
                        message: "分类不能为空"
                    },
                    stringLength: {
                        min: 3,
                        max: 6,
                        message: '类名长度在3到6个汉字'
                    },
                },
            },
        }
    });

    //表单验证成功之后的方法;
    $form.on("success.form.bv", function (e) {
        //阻止表单的默认提交
        e.preventDefault();
       
       
        //使用ajax进行提交
        $.ajax({
            url: "/category/addTopCategory",
            type: "post",
            data: $form.serialize(),
            success: function (res) {
                //如果返回成功,则重新刷新页面;
                if(res.success){
                    $('#myModal').modal('hide');
                    render(page,pageSize);
                    //提交成功后清空输入框;
                    $('input[name=categoryName]').val("");

                }
            }
        });
    })
});