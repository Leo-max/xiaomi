define(["jquery"],function($){
    function register(){
        var oUsername = $("#username");
        var oUsername_p = $("#username_p");
        var oPassword = $("#password");
        var oPassword_p = $("#password_p");
        var aTest = $(".testCode");
        var oTestCode_span = $("#testCode_span")

        //添加失去焦点事件
        oUsername.blur(function(){
            var oValue = oUsername.val();
            //用户名长度是否符合要求
            if(oValue.length < 6 || oValue.length > 18){
                oUsername_p.html('❗️ 账号长度应为6~18个字符');
                oUsername_p.css("color","red");

               //判断首字母是否是字母
            }else if(!/[a-zA-Z]/.test(oValue[0])){
                oUsername_p.html('❗️ 账号必需以英文字母开头');
                oUsername_p.css("color","red");
            }else if(/\W/.test(oValue)){
                oUsername_p.html('❗️ 账号需由字母、数字或下划线组成');
                oUsername_p.css("color","red");
            }else{
                oUsername_p.html('✅ 该账号可注册');
                oUsername_p.css("color","green");
            }
        })
        //密码框键盘事件
        oPassword.keydown(function(){
            var oValue = $(this).val();
            // 每次触发之前，都要将上一次样式全部清空
            for(var i = 0; i < aTest.length; i++){
                aTest.eq(i).css("background","white") ;
                aTest.eq(i).css("display","none");
                oTestCode_span.html("");
            }
            if(oValue.length >= 5){
                // 开始密码强度验证
                if(/^\d+$/.test(oValue) || /^[a-z]+$/.test(oValue) || /^[A-Z]+$/.test(oValue)){
                    aTest.eq(0).css("background","red") ;
                    oTestCode_span.html("弱");
                    oPassword_p.css("display","none");

                    for(var i = 0; i < aTest.length; i++){
                        aTest.eq(i).css("display","block");
                    }
                
                }else if(/\d/.test(oValue) && /[a-z]/.test(oValue) && /[A-Z]/.test(oValue)){
                    aTest.eq(0).css("background","green") ;
                    aTest.eq(1).css("background","green") ;
                    aTest.eq(2).css("background","green") ;
                    oTestCode_span.html("强");
                    oPassword_p.css("display","none");

                    for(var i = 0; i < aTest.length; i++){
                        aTest.eq(i).css("display","block");
                    }
                    
                }else{
                    aTest.eq(0).css("background","yellow") ;
                    aTest.eq(1).css("background","yellow") ;
                    oTestCode_span.html("中");
                    oPassword_p.css("display","none");

                    for(var i = 0; i < aTest.length; i++){
                        aTest.eq(i).css("display","block");
                    }
                    
                }
            }
            if(oValue.length > 16){
                for(var i = 0; i < aTest.length; i++){
                    aTest.eq(i).css("display","none");
                }
                oPassword_p.css("display","block");
                oTestCode_span.html("");
                oPassword_p.html("❗️ 密码不能超过16个字符");
            }
        })

 
        // 注册信息上传

        $("#register_btn").click(function(){
            $.ajax({
                type: "POST",
                url: "register.php",
                data: {
                    username: oUsername.val(),
                    password: oPassword.val(),
                    addTime: new Date().getTime()
                },
                success: function(result){
                    var obj = JSON.parse(result);
                    if(obj.code){
                        oPassword_p.css("color","red")
                    }else{
                        oPassword_p.css("color","green")
                        setInterval(function(){
                            location.href = "login.html";
                        },2000)
                    }

                    aTest.css("display","none");
                    oTestCode_span.css("display","none");
                    oPassword_p.css("display","block");
                    oPassword_p.html(obj.message);
                },
                error: function(msg){
                    alert(msg);
                }
            })
        }) 
    }
    // 对外暴露
    return {
        register: register
    }
})