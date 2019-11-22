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
                   $(`
                        <div class="pro-item  first">
                            <div class="pro-img m-img-hover">
                                <a href = 'GoodsDetails.html'><img  src="${arr[i].img}" style="margin-top: 0px;"></a>
                            </div>
                            <p class="pro-info">${arr[i].title}</p>
                            <p class="pro-desc">${arr[i].span}</p>
                            <p class="pro-price" >${arr[i].i}
                                <span class="pro-unit">${arr[i].price}</span>
                                <i class = 'i'>特价</i>
                            </p>
                            <button id = '${arr[i].id}' class = 'btn'>${arr[i].addto}</button>
                        </div>
                `).appendTo(".list .content")
                
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
         Goods_msg();
        //添加点击事件
        $(".list .content").on("click",".btn",function(){
            //拿id
            var id = this.id;
			var first = $.cookie("goods") == null ? true : false;
            if(first){
                //是第一次存储   新建一个cookie：（键 ，值，可选项）   相当于新建一个数组，如果是新增商品数据，则相当于新增数组里的一个元素
                var arr = [{id: id, num: 1}];
                $.cookie("goods", JSON.stringify(arr),{
                    expires: 7
                })
            }else{
                //判断之前是否添加过  将cookie中已有的数据拿出来挨个匹配
                // 通过键，将这条cookie取出来
                var cookieStr = $.cookie("goods");
                // 将这个json的字符串转成数组
                var cookieArr = JSON.parse(cookieStr);
                var same = false; //假设没有存储过
                //通过循环遍历是否有之前存储过的商品
                for(var i = 0; i < cookieArr.length; i++){
                    // 通过id来判断
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
            Goods_msg();
        })


        // //判断加减，删除按钮商品的id，利用事件委托，对商品进行增删减
        // //删除商品
        $(".bigbox").on("click",".sc",function(){
            //找到商品的id
            //closest第一个符合条件的父节点  删除节点
            var id= $(this).closest(".box").remove().attr("id");
            //删除：1、删除页面上的信息 2、删除cookie中的数据
            var cookieArr = JSON.parse($.cookie("goods"));
            for(var i = 0 ; i < cookieArr.length; i++){
                if(id == cookieArr[i].id){
                    //数组的删除方法  将i的位置的1个数据删除 
                    cookieArr.splice(i,1);
                    break;
                }
            }

          //删除之后不能将空数组村到cookie中，，所以要进行判断是否为空

            if(cookieArr.length){
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:7
                })
            }else{
                $.cookie("goods",null);

            }
            Goods_num();
        })

        //实现加减按钮
        $(".bigbox").on("click",".boxx .num button",function(){
            var id = $(this).closest(".box").attr("id");
            var cookieArr = JSON.parse($.cookie("goods"));
            for(var i = 0 ; i < cookieArr.length;i++){
                if(id == cookieArr[i].id){
                    var goodObj = cookieArr[i];
                    break;
                }
            }
            //判断加减按钮
            if(this.innerHTML == "+"){
                goodObj.num++;
            }else{
                if(goodObj.num == 1){

                }else{
                    goodObj.num--;
                }
            }

            $(this).siblings("span").html(goodObj.num);

            $.cookie("goods",JSON.stringify(cookieArr),{
                 expires:7
            });
            Goods_num();
            total();
        })

        //商品列表选中计算商品总价；（）
       $(".bigbox").on("click",".box .a",function(){
        total();
        })

        //商品列表下面商品全选
       $("input[name = 'b']").click(function(){
        if($(this).is(":checked")){
            $("input[name = 'a']").prop("checked",true);
        }else{
         $("input[name = 'a']").prop("checked",false);
        }
        total();
        });
    

        function total(){
            var aUls = $(".bigbox").find(".box");
            var sum = 0;
            var ce = 0;
            aUls.each(function(index,item){
                //iten表示每个遍历项
                //prop获取checkbox是否被选中，分析checkbox的状态
                var isCheckEd = $(item).find(".a").prop("checked");
                if(isCheckEd){
                    sum = Number($(item).find(".price .reprice").html());
                    ce += sum *  Number($(item).find(".num1").html());
     
                }
                //sum显示
                $(".money").html(ce);
            })
        }
        
        //购物车商品数量
        function Goods_num(){
            var cookieStr = $.cookie("goods");
            // 不是每一次都有数据给你取的。
            if(cookieStr){
                // 数据存在，转成数组  
                var cookieArr = JSON.parse(cookieStr);
                var sum = 0;
                for(var i = 0; i < cookieArr.length; i++){
                    // 将cookie每个商品的数量进行累加
                    sum += cookieArr[i].num;
                    // alert(sum);
                }
                $(".jlt4 .sc_num").html(sum);
            }else{
                // 数据不存在的情况下  
                $(".jlt4 .sc_num").html(0);
            }
        }
        //购物车商品信息
        function Goods_msg(){
            $.ajax({
                type:"get",
                url:"data/GoodsList.json",
                success:function(arr){
                    //alert(arr);
                    var arr = arr.list;
                    var cookieStr = $.cookie("goods");
                    if(cookieStr){
                        var cookieArr = JSON.parse(cookieStr);
                        var newArr = [];
                        //将所有数据遍历
                        for(var i = 0 ; i< arr.length;i++){
                            //将cookie中的数据遍历
                            for(var j = 0 ; j < cookieArr.length;j++){
                                if(arr[i].id == cookieArr[j].id){
                                    //增加商品数量
                                    arr[i].num = cookieArr[j].num;
                                    newArr.push(arr[i]);
                                    //加入购物车的商品，不仅有商品信息，还有商品数量
                                    //最后可以拿到，加入购物车的商品数据
                                }
                            } 
                        }
                        for(var i = 0 ; i < newArr.length; i++){
                            var node = $(`<div class="box clearfn" id="${newArr[i].id}">
                            <input type="checkbox" name = 'a' value = '选择' class = 'a'/>
                            <div class="img" >
                            <a href="goodsDetails.html"><img src="${newArr[i].img}" alt=""></a>
                            </div>
                            <div class="name">
                                <p class="good-name brown-hover">${newArr[i].title}</p>
                            </div>  
                            <div class = 'price'><i>单价:${newArr[i].i}</i><i class = 'reprice'>${newArr[i].price}</i></div>  
                            <div class="boxx">
                                <div class="num">
                                        商品数量:
                                    <button>+</button>
                                    <span class = 'num1'>${newArr[i].num}</span>
                                    <button>-</button>
                                </div>
                            </div>
                            <div class="but">
                                <button class="sc">删除</button>
                            </div>
                        </div>
                    </div>`);
                            node.appendTo(".bigbox")
                        }
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
            })
        }

           
        // })
    }

    return{
        dh:dh,
        GoodsList:GoodsList,
        shoppCar:shoppCar
    }
})