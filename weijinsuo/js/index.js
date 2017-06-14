/**
 * Created by luo on 2017/6/9.
 */

$(function () {

    banner();
    ununtMobileTabs();
    $('[data-toggle="tooltip"]').tooltip();
});

/*轮播图*/
function banner(){


    var data = [
        {
            "abc":"images/slide_01_2000x410.jpg",
            "img":"images/slide_01_640x340.jpg",
        },
        {
            "abc":"images/slide_02_2000x410.jpg",
            "img":"images/slide_02_640x340.jpg",
        },
        {
            "abc":"images/slide_03_2000x410.jpg",
            "img":"images/slide_03_640x340.jpg",
        },
        {
            "abc":"images/slide_04_2000x410.jpg",
            "img":"images/slide_04_640x340.jpg",
        },
    ]

    var render = function () {
        var width = $(window).width();
        console.log(width);
        var isMobile = false;
        /*是否移动端*/
        if(width < 768){
            isMobile = true;
        }
        /*取得模板的字符串*/
        var pointTemplateStr = $('#point_template').html();
        var imageTemplateStr = $('#image_template').html();

        /*转化成模板函数*/
        var pointTemplate = _.template(pointTemplateStr);
        var imageTemplate = _.template(imageTemplateStr);

        /*传入数据 解析成html字符*/
        var pointHTML = pointTemplate({model:data});
        var imageHTML = imageTemplate({model:data,isMobile:isMobile});

        /*把HTML渲染在页面中*/
        $('.carousel-indicators').html(pointHTML);
        $('.carousel-inner').html(imageHTML);
    }
    render();

    $(window).on('resize', function () {
        render();
    }).trigger('resize');

    /*移动端用手势进行上一张下一张的滑动*/
    var startx = 0,movex = 0, distancex = 0, isMove = 0;
    $('.carousel-inner').on('touchstart', function (e) {
        startx = e.originalEvent.touches[0].clientX;

    }).on('touchmove',function(e){

        movex = e.originalEvent.touches[0].clientX;
        distancex = movex - startx;
        isMove = true;
    }).on('touchend', function (e) {
        if(Math.abs(distancex) > 50&& isMove){

            if(distancex > 0){
                $('.carousel').carousel('prev');
            }else{
                $('.carousel').carousel('next')
            }

        }
        startx = 0,movex = 0, distancex = 0, isMove = 0;
    });
}


/*初始移动端tabs组件的功能*/
function ununtMobileTabs(){
    var $parent = $('.wjs-product-tabs-parent');

    var $ul = $parent.find('ul');

    var $lis = $ul.find('li');

    var widthSum = 0;

    $lis.each(function (i,item) {
        widthSum += $(item).innerWidth();
    })

    $ul.width(widthSum);

    itcast.iScroll({
        swipeDom:$parent.get(0),
        swipeType:'x',
        swipeDistance:20
    });

}