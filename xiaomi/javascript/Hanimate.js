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
            $(this).css("box-shadow","10px 10px 60px #666");
        })
        $(".goods").on("mouseleave",".c1",function(){
            $(this).css("box-shadow","none");
        })
        //每日新品阴影效果
        $(".middle").on("mouseenter",".c1",function(){
            $(this).css("box-shadow","10px 10px 60px #666");
        })
        $(".middle").on("mouseleave",".c1",function(){
            $(this).css("box-shadow","none");
        })

        //专属划入阴影
        $(".content6").on("mouseenter",".t1",function(){
            $(this).css("box-shadow","1px 1px 3px rgb(190, 186, 186)");
        })
        $(".content6").on("mouseleave",".t1",function(){
            $(this).css("box-shadow","none");
        })
        //商品详情页，给加入购物车添加点击事件


    }
    return{
        Hanimate:Hanimate
    }
})