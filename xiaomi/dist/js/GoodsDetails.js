define(["jquery"],function(){
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
    
    return{
        dh:dh
    }
})