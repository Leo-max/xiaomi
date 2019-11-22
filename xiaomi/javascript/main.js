require.config({
    paths:{
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "nav": "nav",
        "Hanimate":"Hanimate",
        "list":"list"
 
    },
    shim:{ 
        "jquery-cookie": ["jquery"]
    }
})
require(['nav','Hanimate','list'],function(nav,Hanimate,list){
    nav.dh(),
    nav.download(),
    Hanimate.Hanimate(),
    nav.banner(),
    nav.slidenav(),
    nav.child(),
    nav.F1(),
    nav.timer(),
    nav.NewGoods(),
    nav.HotGoods(),
    nav.Recommend(),
    nav.timerTab(),
    list.shoppCar()
})
