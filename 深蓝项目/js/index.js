/**
 * Created by luo on 2017/6/22.
 */

//当鼠标移动到nav的li时，给当前li添加class并移除其他li的class，并把对应的ye显示出来，隐藏其他。



    $(function () {
        $(".main>div:eq(0)").css("display","block");

        $(".nav>ul>li").mouseover(function () {
            $(this).addClass("active").siblings().removeClass("active");
            that = $(this).index();

            $(".main>div").eq(that).css("display","block").siblings().css("display","none");

        });

    });




    /*点击注册*/
    var register = document.getElementById("register");
    var zc = document.getElementById("zc");

    zc.onclick = function () {
        register.style.display = "block";
    };

    document.onclick = function (event) {

        var event = event || window.event;
        var target = event.target ? event.target : event.srcElement;
        if(target.className === "register"){
            register.style.display = "none";
        }
    }


    /*点击登陆*/
    var deng = document.querySelector(".deng");
    var dengluX = document.querySelector(".denglu-x");
    var dl = document.querySelector("#dl");

    dl.addEventListener("click", function () {
        deng.style.display = "block";
    });

    dengluX.addEventListener("click", function () {
        deng.style.display = "none";
    });

    document.addEventListener("click", function (event) {
        var event = event || window.event;
        var targetId = event.target ? event.target: event.srcElement;
        if (targetId.className === "deng") {
            deng.style.display = "none";
        }
    });

    /*由登陆跳到注册*/
    var tiaozc = document.querySelector(".tiaozc");
    tiaozc.addEventListener("click", function () {
        register.style.display = "block";
        deng.style.display = "none";
    })


    /*记住密码*/
    var remInput = document.querySelector(".remember .state");
    var remSpan = document.querySelector(".remember>span");
    var remI = document.querySelector(".remember>span>i");

    var flag = false;
    remSpan.addEventListener("click", function () {
        if(flag){
            remInput.value = "on";
            remSpan.style.backgroundColor = "#ccac73";
            remI.style.left = "1.5px";
            flag = false;
        }else{
            remInput.value = "off";
            remSpan.style.backgroundColor = "#ccc";
            remI.style.left = "16.5px";
            flag = true;
        }
    })

    /*忘记密码*/

    var forget = document.querySelector("#forget");
    var findPasswordX = document.querySelector(".findPassword-x");
    var findP = document.querySelector(".findP");

    forget.addEventListener("click", function () {
        findP.style.display = "block";
        deng.style.display = "none";
    });

    findPasswordX.addEventListener("click", function () {
        findP.style.display = "none";
    });

    document.addEventListener("click", function (event) {
        var event = event || window.event;
        var targetId = event.target ? event.target: event.srcElement;
        if (targetId.className === "findP") {
            findP.style.display = "none";
        }
    });
