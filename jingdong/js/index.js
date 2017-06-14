/**
 * Created by luo on 2017/6/11.
 */

$(function () {

    //关闭广告
    $(".close-ban").click(function () {
        $(".topbanner").css("display","none");
    })

    //手动控制轮播图
    $(".main-slider-img li").eq(0).show();
    $(".circle li").mouseover(function () {
        $(this).addClass("current").siblings().removeClass("current");

        var index = $(this).index();
        $(".main-slider-img li").eq(index).stop().fadeIn(200).siblings().stop().fadeOut(200);
    })

    //自动播放,加上定时器
    var timer = null;
    timer = setInterval(autoPlay,2000);

    $(".main-slider").mouseover(function () {
        clearInterval(timer);
    })

    $(".main-slider").mouseout(function () {
        timer = setInterval(autoPlay,2000)
    })

    var num = 0;
    function autoPlay(){
        num++;
        if(num>5){
            num=0;
        }
        $(".circle li").eq(num).addClass("current").siblings().removeClass("current");
        $(".main-slider-img li").eq(num).stop().fadeIn(200).siblings().stop().fadeOut(200);
    }

    //左右切换
    $(".arrow-r").click(function(){
        autoPlay();
    })

    $(".arrow-l").click(function(){
        num--;
        if(num<0){
            num=5;
        }
        $(".circle li").eq(num).addClass("current").siblings().removeClass("current");
        $(".main-slider-img li").eq(num).stop().fadeIn(200).siblings().stop().fadeOut(200);
    })

})

//**************今日推荐*******************

$(function(){
    var scrnews=$(".today-r-ul");


    var newst=setInterval(scro,3500);

    scrnews.hover(function(){
        clearInterval(newst);
    },function(){
        newst=setInterval(scro,3500);
    })

    function scro(){
        scrnews.animate({left:-1000},1500,function(){
            $(this).children("li:first").appendTo(this);
            $(this).css("left",0);
        });
    }

    $('.today-arrow').hover(function(){
        clearInterval(newst);
    },function(){
        newst=setInterval(scro,3500);
    })

    $('.today-arrow-l').click(function(){
        scrnews.children("li:first").appendTo(scrnews);
    })
    $('.today-arrow-r').click(function(){
        scrnews.children("li:last").prependTo(scrnews);
    })

})