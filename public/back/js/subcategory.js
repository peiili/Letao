$(function () {
    var page = 1;
    var pageSize = 3;

    function render(pg, ps) {
        $.ajax({
            url: "/category/querySecondCategoryPaging",
            type: "get",
            data: {
                "page": pg,
                "pageSize": ps
            },
            success: function (data) {
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


                var html=template("test",data);
                $("#user-management").html(html);
            }
        });
    }
    render(page,pageSize);

});