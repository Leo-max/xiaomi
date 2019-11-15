require.config({
    paths:{
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "list":"list",
        "Hanimate":"Hanimate"
 
    },
    shim:{ 
        "jquery-cookie": ["jquery"]
    }
})
require(["list","Hanimate"],function(list,Hanimate){
    list.GoodsList(),
    list.dh(),
    Hanimate.Hanimate(),
    list.shoppCar()

})