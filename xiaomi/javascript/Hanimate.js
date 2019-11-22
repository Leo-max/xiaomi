define(['jquery'],function($){
    function Hanimate(){
        //顶部导航兰
        $(".logo .ul li").mouseenter(function(){
            // alert($(this).index());
            $(".dh").eq($(this).index()).css("display","block");
        })
        $(".logo .ul li").mouseleave(function(){
            // alert($(this).index());
            $(".dh").eq($(this).index()).css("display","none");
        })
        $(".logo").on("mouseenter",".dh",function(){
            $(this).css("display","block")
        })
        $(".logo").on("mouseleave",".dh",function(){
            $(this).css("display","none")
        })

        $(".logo .ul li span a").hover(function(){
            $(this).css("color","orange");
        },function(){
            $(this).css("color","black");
        })

        // 侧边栏 
        // 移入移出左边目录的li标签
        $(".container").on("mouseenter",".list li",function(){
            // alert($(this).index());
            $(this).css({"backgroundColor":"rgb(109, 82, 51)"});

            $(".cbl").eq($(this).index()).css("display","block");
        })

        $(".container").on("mouseleave",".list li",function(){

            $(this).css("backgroundColor","rgb(146, 110, 68)");

            $(".cbl").eq($(this).index()).css("display","none");
        })

        // 移入移出弹出框  
        $(".bannerbox").on("mouseenter",".cbl",function(){
            $(this).css("display","block")
        })
        $(".bannerbox").on("mouseleave",".cbl",function(){
            $(this).css("display","none")
        })

        //移入侧边栏A标签字体变色
        $(".container .list").on("mouseenter","a",function(){
            $(this).css("color","rgb(146, 110, 68)");
        })
        $(".container .list").on("mouseleave","a",function(){
            $(this).css("color","white");
        })

        $(".content3 .r").mouseenter(function(){
            $(this).css("backgroundColor","gray");
        })
        $(".content3 .r").mouseleave(function(){
            $(this).css("backgroundColor","rgb(166,172,168)");
        })


        //划入商品出现阴影效果
        $(".goods").on("mouseenter",".c1",function(){
            $(this).css("box-shadow","10px 10px 60px #f5d6c2");
        })
        $(".goods").on("mouseleave",".c1",function(){
            $(this).css("box-shadow","none");
        })
        //每日新品阴影效果
        $(".middle").on("mouseenter",".c1",function(){
            $(this).css("box-shadow","10px 10px 60px ##f5d6c2");
        })
        $(".middle").on("mouseleave",".c1",function(){
            $(this).css("box-shadow","none");
        })

        //专属划入阴影
        $(".content6").on("mouseenter",".t1",function(){
            $(this).css("box-shadow","1px 1px 3px #f5d6c2");
        })
        $(".content6").on("mouseleave",".t1",function(){
            $(this).css("box-shadow","none");
        })


        //小图片点击放大
        $(".pic img").click(function(){
           var src =  $(this).attr("src");
           $(".big #small").find("img").attr("src",src);
           $(".big-plus").find("#pic").attr("src",src);
        })
        $(".small .top").click(function(){
            $(".picture").animate({top:0},50)
        })
        $(".small .bottom").click(function(){
            $(".picture").animate({top:-85},50)
        })

        //点击首页守则选框
        $(".border").click(function(){
            $("[name='checkbox']").attr("checked",true); 
            $("span").css("color","black");
            window.onload = function(){
                $("[name='checkbox']").attr("checked",false);    
                $("span").css("color","gray");

            }
        })

        


        //商品详情放大镜效果
        $(".big").mouseenter(function(){
            $(".big-plus,.mark").css("display","block");
        })
        $(".big").mouseleave(function(){
            $(".big-plus,.mark").css("display","none");
        }).mousemove(function(ev){
            var l = ev.pageX  - $(this).offset().left - 50;
            var t = ev.pageY - $(this).offset().top -50;
            if(l <= 0 ){
                l=0;
            }
            if( l >= 272){
                l=272;
            }
            if(t <= 0){
                t=0;
            }
            if(t >= 272){
                t=272;
            }

            $(".mark").css({
                left:l,
                top:t
            })

            $(".big-plus img").css({
                left: -2 * (l - 50),
                top: -2 * (t-50)
            })
        })

    }
    return{
        Hanimate:Hanimate
    }
})