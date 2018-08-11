// 首页的js文件

//插入图标;
var dom = document.getElementById("bar");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '8月份第一周全球销量'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        type: 'category',
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }],
    
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
};


//插入饼图
var dom = document.getElementById("pipe");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title : {
        text: '8月份国产汽车销量',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['领克02','长城vv5','瑞虎8','博越','比亚迪唐']
    },
    series : [
        {
            name: '汽车销量',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'领克02'},
                {value:310, name:'长城vv5'},
                {value:234, name:'瑞虎8'},
                {value:135, name:'博越'},
                {value:1548, name:'比亚迪唐'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

//点击左侧导航栏展开隐藏二级导航
// $('li').click(function(){
//        console.log("1");
       
//    if($(this).index() == 1){
//     console.log("2");
//        $(this).addClass("bgColor active1").siblings().removeClass("bgColor");
//    }else {
//     $(this).addClass("bgColor").siblings().removeClass("bgColor active1");
//    }
// });


