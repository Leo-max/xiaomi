require.config({
    paths:{
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "GoodsDetails":"GoodsDetails",
        "Hanimate":"Hanimate",
        "list":"list"

    },
    shim:{ 
        "jquery-cookie": ["jquery"]
    }
})
require(['GoodsDetails','Hanimate',"list"],function(GoodsDetails,Hanimate,list){
    GoodsDetails.dh(),
    Hanimate.Hanimate(),
    list.shoppCar()
})