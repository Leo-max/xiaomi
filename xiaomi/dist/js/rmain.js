require.config({
    paths:{
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "register":"register",
        "Hanimate":"Hanimate"
    },
    shim:{ 
        "jquery-cookie": ["jquery"]
    }
})
require(['register','Hanimate'],function(register,Hanimate){
    register.register();
    Hanimate.Hanimate();
}) 