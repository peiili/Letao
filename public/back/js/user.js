//个人中心js文件
//引入ajax;

$(function () {
    var page = 1;
    var pageSize = 3;
    function render(pg,ps){
         $.ajax({
        url: "/user/queryUser",
        type: "get",
        data: {
            "page": pg,
            "pageSize":ps,
        },
        success: function (data) {

              //调用分页插件
              $("#paginator").bootstrapPaginator({
                bootstrapMajorVersion:3,//指定bootstrap的版本，如果是3，必须指定
                currentPage:page,//指定当前页
                totalPages:Math.ceil(data.total/pageSize),//指定总页数
                onPageClicked:function (a,b,c, index) {
                  //page指的是点击的页码,修改了当前页
                  page = index;
                  //重新渲染
                  render(page,pageSize);
                }
              });
                //调用模板；
                //方式一
            // var html = template("test", {
            //     list: data.rows
            // });


            //方式二
            //这种方式可以将返回的数据全部放到模板中；
            var html = template("test",data);
            //将数据插入模板；
            $("#user-management").html(html);

        }
    });
    }
    render(page,pageSize);
   

    //分页插件
   


});