define(['jquery','jquery-cookie'],function($){
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
                        <a href="">
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
                                <a href="spxq.html">
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
                                <a href="spxq.html">
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
                                <a href="spxq.html">
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
                                <a href="spxq.html">
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
                                <a href="spxq.html">
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

    //商品列表
    function GoodsList(){
        $.ajax({
            typr:"get",
            url:"data/GoodsList.json",
            success:function(data){
                var arr = data.list;
                //alert(arr);
                for(var i = 0 ;i < arr.length; i++){
                   $(`<a href="goodsDetails.html">
                        <div class="pro-item  first">
                            <div class="pro-img m-img-hover">
                                <img  src="${arr[i].img}" style="margin-top: 0px;">
                            </div>
                            <p class="pro-info">${arr[i].title}</p>
                            <p class="pro-desc">${arr[i].span}</p>
                            <p class="pro-price" >
                                <span class="pro-unit">${arr[i].price}</span>
                                <i class = 'i'>特价</i>
                            </p>
                            <button id = '${arr[i].id}' class = 'btn'>${arr[i].addto}</button>
                        </div>
                </a>`).appendTo(".list .content")
                
                }
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }



    //给商品点击加入购物车事件
    function shoppCar(){

        Goods_num();

        //添加点击事件
        $(".list .content").on("click",".btn",function(){


            //拿id
            var id = this.id;
            //判断是否是第一次存储
            var first = $.cookie("goods") == null ?true:false;
            if(first){
                var arr= [{id:id,num:1}];
                $.cookie("goods",JSON.stringify(arr),{
                    expires:7
                })
            }else{
                //如果不是第一次，需要将cookie中的商品数据取出来
                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                var same = false;//假设没有存储过
                for(var i = 0 ; i < cookieArr.length;i++){
                    if(cookieArr[i].id == id){
                        cookieArr[i].num++;
                        same = true;
                        break;
                    
                    }
                }
                if(!same){
                    var obj = {id:id,num:1};
                    cookieArr.push(obj);
                }

                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })
            }

            Goods_num();

        })
        //购物车商品数量
        function Goods_num(){
            var cookieStr = $.cookie("goods");
            //alert(cookieStr)
            if(cookieStr){
                var cookieArr = JSON.parse(cookieStr);
                var sum = 0 ;
                for(var i = 0 ;i < cookieArr.length; i++){
                    sum += cookieArr[i].num;
                }
                $(".jlt4 .sc_num").html(sum);
            }else{
                $(".jlt4 .sc_num").html(0);
            }
        }
        //购物车商品信息

    }
    return{
        dh:dh,
        GoodsList:GoodsList,
        shoppCar:shoppCar
    }
})