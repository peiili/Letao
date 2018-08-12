$(function(){
    $(".glyphicon-align-justify").click(function(){
    //给左边的块添加active类;
    $(".left").toggleClass("active");
    $('.main').toggleClass("padd");
});
//点击左侧按钮，改变li标签的高度；
$(".libtn").click(function(){
    $(this).toggleClass("active1");

});


})
