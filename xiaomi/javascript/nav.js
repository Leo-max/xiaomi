define(["jquery"],function($){
    //头部导航
    function dh(){
        $.ajax({
            type:"get",
            url:"data/nav.json",
            success:function(data){
                //alert(data);
                var arr1 = data.dh1;
                for(var i = 0 ; i <arr1.length ; i++){
                    $(` <li>
                    <a href="GoodsList.html">
                        <div class="figure">
                            <img src="images/${arr1[i].img}" width="160" height="110">
                        </div>
                        <div class="title" style="color: #333;line-height: 20px;font-size: 14px;">${arr1[i].title}</div>
                        <p class="price" style="font-size: 12px;line-height: 20px; color: orange;">${arr1[i].price}</p>
                    </a>
                </li>`).appendTo(".dh .dh1")
                }
                var arr2 = data.dh2;
                for(var i = 0;i < arr2.length;i++){
                    $(`<li>
                            <a href="GoodsList.html">
                                <div class="figure">
                                    <img src="images/${arr2[i].img}" width="160" height="110">
                                </div>
                                <div class="title" style="color: #333;line-height: 20px;font-size: 14px;">${arr2[i].title}</div>
                                <p class="price" style="font-size: 12px;line-height: 20px; color: orange;">${arr2[i].price}</p>
                            </a>
                        </li>`).appendTo(".dh .dh2")
                } 
                var arr3 = data.dh3;
                for(var i = 0;i < arr3.length;i++){
                    $(`<li>
                            <a href="GoodsList.html">
                                <div class="figure">
                                    <img src="images/${arr3[i].img}" width="160" height="110">
                                </div>
                                <div class="title" style="color: #333;line-height: 20px;font-size: 14px;">${arr3[i].title}</div>
                                <p class="price" style="font-size: 12px;line-height: 20px; color: orange;">${arr3[i].price}</p>
                            </a>
                        </li>`).appendTo(".dh .dh3")
                }
                var arr4 = data.dh4;
                for(var i = 0;i < arr4.length;i++){
                    $(`<li>
                            <a href="GoodsList.html">
                                <div class="figure">
                                    <img src="images/${arr4[i].img}" width="160" height="110">
                                </div>
                                <div class="title" style="color: #333;line-height: 20px;font-size: 14px;">${arr4[i].title}</div>
                                <p class="price" style="font-size: 12px;line-height: 20px; color: orange;">${arr4[i].price}</p>
                            </a>
                        </li>`).appendTo(".dh .dh4")
                }
                var arr5 = data.dh5;
                for(var i = 0;i < arr5.length;i++){
                    $(`<li>
                            <a href="GoodsList.html">
                                <div class="figure">
                                    <img src="images/${arr5[i].img}" width="160" height="110">
                                </div>
                                <div class="title" style="color: #333;line-height: 20px;font-size: 14px;">${arr5[i].title}</div>
                                <p class="price" style="font-size: 12px;line-height: 20px; color: orange;">${arr5[i].price}</p>
                            </a>
                        </li>`).appendTo(".dh .dh5")
                }
                var arr6 = data.dh6;
                for(var i = 0;i < arr6.length;i++){
                    $(`<li>
                            <a href="GoodsList.html">
                                <div class="figure">
                                    <img src="images/${arr6[i].img}" width="160" height="110">
                                </div>
                                <div class="title" style="color: #333;line-height: 20px;font-size: 14px;">${arr6[i].title}</div>
                                <p class="price" style="font-size: 12px;line-height: 20px; color: orange;">${arr6[i].price}</p>
                            </a>
                        </li>`).appendTo(".dh .dh6")
                }
    
            },
            error:function(msg){
                console.log(msg)
            }
        })
    }
    //banner
    function download(){
        $.ajax({
            type:"get", 
            url:"data/nav.json",
            success:function(data){
                // alert(data);
                var arr = data.banner;
                $("#play ul").css("width",arr.length * 859);

                for(var i = 0 ;i <arr.length;i++){
                    $(`<li><a href="${arr[i].url}">
                    <img  src = '${arr[i].img}' alt=""/>
                </a></li>`).appendTo("#play ul");
                    if(i == 0){
                        $(` <li class = 'xba active'></li>`).appendTo(".banner .xb ol");
                    }else{
                        $(` <li class = 'xba '></li>`).appendTo(".banner .xb ol");
                    }
                }
                
                
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }

    function banner(){
        var iNow = 0; //代表当前图片的下标
        var aImgs = null; //记录所有图片
        var aBtns = null; //记录所有原点
        var timer = null;

        var oUl = $("#play").find("ul");

        timer = setInterval(function(){
            iNow++;
            tab();
        }, 2500);

        function tab(){
            if(!aImgs){
                aImgs = $(".banner").find(".play").find("a");
            }
            if(!aBtns){
                aBtns = $(".banner").find(".xb").find("li");
            }
           
            if(iNow == 7){
                // alert(iNow);
                iNow = 0;
                $("#play ul").css("left",0);
            }
            
            // aImgs.hide().css("opacity", 0.2).eq(iNow).show().animate({opacity: 1}, 500);
            oUl.animate({left: -859 * iNow},300);
            aBtns.removeClass("active").eq(iNow).addClass("active");

        }

        //给每一个圆圈添加点击事件，事件委托去添加
        
        $(".banner .xb ol").on("click", "li", function(){
            iNow = $(this).index();
            tab();
            return false;
            // 小圆圈是a标签，点击时会自动刷新页面，return false阻止
        })


        //添加移入移出
        $(".banner").mouseenter(function(){
            clearInterval(timer);
        })
        $(".banner").mouseleave(function(){
            timer = setInterval(function(){
                iNow++;
                tab();
            }, 2500);
        })

        //给左右按钮添加点击函数
        $(".jlt5,.jlt6").click(function(){
            if(this.className == "jlt6"){

                //左边按钮
                iNow--;
                // alert(iNow);
                if(iNow == -1){
                    iNow = 7
                }
            }else{
                iNow++;
               
            }
            tab();
        })
    }
//侧边栏
    function slidenav(){
        $.ajax({
            type:"get",
            url:"data/nav.json",
            success:function(data){
                // alert(data);
                var arr = data.slidenav;
                for(var i = 0 ; i<arr.length;i++){
                    $(`<li>
                    <a href="GoodsList.html" style="color: #fff"><span>${arr[i].title}</span></a>
                </li>`).appendTo(".container .list")
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    //加载弹出框数据
    function child(){
        $.ajax({
            type:"get",
            url:"data/nav.json",
            success:function(data){
                var arr = data.child1;
                for(var i = 0;i < arr.length;i++){
                    $( `<li class="wz">
                            <a href="GoodsList.html">
                            <img src="images/${arr[i].img}" alt="">
                            <span>${arr[i].title}</span></a>
                         </li>
                       `).appendTo(".cbl .cbl1")
                }
                var arr = data.child2;
                for(var i = 0;i < arr.length;i++){
                    $( `<li class="wz">
                            <a href="GoodsList.html">
                            <img src="${arr[i].img}" alt="">
                            <span>${arr[i].title}</span></a>
                         </li>
                       `).appendTo(".cbl .cbl2")
                }
                var arr = data.child3;
                for(var i = 0;i < arr.length;i++){
                    $( `<li class="wz">
                            <a href="GoodsList.html">
                            <img src="${arr[i].img}" alt="">
                            <span>${arr[i].title}</span></a>
                         </li>
                       `).appendTo(".cbl .cbl3")
                }
                var arr = data.child4;
                for(var i = 0;i < arr.length;i++){
                    $( `<li class="wz">
                            <a href="GoodsList.html">
                            <img src="${arr[i].img}" alt="">
                            <span>${arr[i].title}</span></a>
                         </li>
                       `).appendTo(".cbl .cbl4")
                }
                var arr = data.child5;
                for(var i = 0;i < arr.length;i++){
                    $( `<li class="wz">
                            <a href="GoodsList.html">
                            <img src="${arr[i].img}" alt="">
                            <span>${arr[i].title}</span></a>
                         </li>
                       `).appendTo(".cbl .cbl5")
                }
                var arr = data.child6;
                for(var i = 0;i < arr.length;i++){
                    $( `<li class="wz">
                            <a href="GoodsList.html">
                            <img src="${arr[i].img}" alt="">
                            <span>${arr[i].title}</span></a>
                         </li>
                       `).appendTo(".cbl .cbl6")
                }
                var arr = data.child7;
                for(var i = 0;i < arr.length;i++){
                    $( `<li class="wz">
                            <a href="GoodsList.html">
                            <img src="${arr[i].img}" alt="">
                            <span>${arr[i].title}</span></a>
                         </li>
                       `).appendTo(".cbl .cbl7")
                }
                var arr = data.child8;
                for(var i = 0;i < arr.length;i++){
                    $( `<li class="wz">
                            <a href="GoodsList.html">
                            <img src="${arr[i].img}" alt="">
                            <span>${arr[i].title}</span></a>
                         </li>
                       `).appendTo(".cbl .cbl8")
                }
                var arr = data.child9;
                for(var i = 0;i < arr.length;i++){
                    $( `<li class="wz">
                            <a href="GoodsList.html">
                            <img src="${arr[i].img}" alt="">
                            <span>${arr[i].title}</span></a>
                         </li>
                       `).appendTo(".cbl .cbl9")
                }
            },
            error:function(msg){
                console.log(msg)
            }
        })
    }
    //F1
    function F1(){
        $.ajax({
            type:"get",
            url:"data/nav.json",
            success:function(data){
                var arr = data.F1;
                for(var i = 0 ;i < arr.length ; i++){
                    $(`<a href ='${arr[i].url}'><li >
                    <div  style="padding: 25px 25px 15px; ">
                        <img src="${arr[i].img}"   style="width: 80px; height: 80px;">
                    </div>
                    <p class="title" style="color: rgb(102, 102, 102);">${arr[i].title}</p>
                </li></a>`).appendTo(".content1 .clist");
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    //限时抢购
    function timer(){
        $.ajax({
            typr:"get",
            url:"data/nav.json",
            success:function(data){
                var arr = data.timer;
                $(".contentbox3 .goods").css("width",arr.length * 266);

                for(var i = 0 ; i < arr.length;i++){
                    $(`        <a href="GoodsDetails.html">
                    <div class="c1">
                        <img src="${arr[i].img}" alt="">
                        <div class="m-goods-common-box">
                            <p class="pro-info">${arr[i].title}</p>
                            <p class="pro-price">
                                <span>${arr[i].reprice}</span><i>${arr[i].price}</i>
                            </p>
                        </div>
                    </div>
                </a>`).appendTo(".contentbox2 .content3 .goods");
                }
            },
            error:function(msg){

            }
        })
    }



    //限时购左右切换
    function timerTab(){

        var iNow = 0
        $(".l").click(function(){
            iNow++;
            $(".content3 .goods").animate({left: + 270 * iNow});

        })

        $(".r").click(function(){
            iNow++;
            $(".content3 .goods").animate({left: - 270 * iNow});
            if(iNow == 4){
                //$(this).animate().stop(true);
             iNow = -1
            }
        })

    }


    //每日新品
    function NewGoods(){
        $.ajax({
            typr:"get",
            url:"data/nav.json",
            success:function(data){
                var arr = data.NewGoods;
                for(var i = 0  ; i < arr.length;i++){
                    $(`<a href="GoodsDetails.html">
                    <div class="c1">
                        <img src="${arr[i].img}" alt="">
                        <div class="m-goods-common-box">
                            <p class="pro-info">${arr[i].title}</p>
                            <p class="pro-desc">${arr[i].span}</p>
                            <p class="pro-price">
                                <span>${arr[i].price}</span>
                            </p>
                        </div>
                    </div>
                </a>`).appendTo(".content4 .middle")
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }

    //热门商品
    function HotGoods(){
        $.ajax({
            typr:"get",
            url:"data/nav.json",
            success:function(data){
                var arr = data.HotGoods;
                for(var i = 0  ; i < arr.length;i++){
                    $(`<a href="GoodsDetails.html">
                    <div class="c1">
                        <img src="${arr[i].img}" alt="">
                        <div class="m-goods-common-box">
                            <p class="pro-info">${arr[i].title}</p>
                            <p class="pro-desc">${arr[i].span}</p>
                            <p class="pro-price">
                                <span>${arr[i].price}</span>
                            </p>
                        </div>
                    </div>
                </a>`).appendTo(".content5 .middle")
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    //专属推荐
    function Recommend(){
        $.ajax({
            typr:"get",
            url:"data/nav.json",
            success:function(data){
                var arr = data.Recommend;
                for(var i = 0  ; i < arr.length;i++){
                    $(`<a href="GoodsDetails.html">
                        <div class="t1">
                            <div class="img" >
                                <div class = 'Min'>${arr[i].Min}</div>
                                <img src="${arr[i].img}">
                            </div>
                            <p class = "tag-text">${arr[i].p}</p>
                            <div class="text-box">
                                <p class="pro-desc">${arr[i].a}</p>
                                <p class="pro-info" >${arr[i].title}</p>
                                <p class="pro-price">
                                <span>${arr[i].i}<span class="m-num">${arr[i].price}</span>起</span>
                                </p>
                        </div>
                    </div>
                </a>`).appendTo(".content6")
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    //专属推荐商品（三色可选）标签判断
    // function filterMin(){
    //     $.ajax({
    //         type:"get",
    //         url:"data/nav.json",
    //         success:function(data){
    //             var arr = data.Recommend;
    //             alert(arr.Min);
    //         },
    //         error:function(msg){
    //             console.log(msg)
    //         }
    //     })
    // }
    return{
        dh:dh,
        download:download,
        banner:banner,
        slidenav:slidenav,
        child:child,
        F1:F1,
        timer:timer,
        NewGoods:NewGoods,
        HotGoods:HotGoods,
        Recommend:Recommend,
        timerTab:timerTab,
    }
})