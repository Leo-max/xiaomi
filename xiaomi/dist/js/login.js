define(['jquery'],function($){
    function login(){
        $(".btn-login").click(function(){
            $.ajax({
                type:"post",
                url:"login.php",
                data:{
                    username:$(".username").val(),
                    password:$(".password").val() 
           
                },
                success:function(result){
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $(".alert_p").css("color","red");
                    }else{
                        $(".alert_p").css("color","green");
                        setInterval(function(){
                            location.href = "index.html";
                        },2000)
                    }

                    $(".alert_p").css("display","block");
                    $(".alert_p").html(obj.message);
                },
                error:function(msg){
                    alert(msg);
                }
            })

        })
    }
    return{
        login:login
    }
})