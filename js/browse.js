
//导航里面  二级菜单

// const { link } = require("fs");
// const { Script } = require("vm");

//男鞋
let nan =document.querySelector(".man")
nan.onmouseenter=function(){
    $("#nan").slideDown();
}
nan.onmouseleave=function(){
    $("#nan").slideUp();
}
//女鞋
let nv = document.querySelector(".woman")
nv.onmouseenter=function(){
    $("#nv").slideDown();
}
nv.onmouseleave=function(){
    $("#nv").slideUp();
}
//儿童
let ertong = document.querySelector(".children")
ertong.onmouseenter=function(){
    $("#ertong").slideDown();
}
ertong.onmouseleave=function(){
    $("#ertong").slideUp();
}
//运动
let sporter = document.querySelector(".sport")
sporter.onmouseenter=function(){
    $("#sporter").slideDown();
}
sporter.onmouseleave=function(){
    $("#sporter").slideUp();
}
//品牌
let pingpai = document.querySelector(".pingpai")
pingpai.onmouseenter=function(){
    $("#pingpai").slideDown();
}
pingpai.onmouseleave=function(){
    $("#pingpai").slideUp();
}



//点击事件
let ilist= $(".i");
let cishu = 0 ;
ilist.click(function(){
    cishu++;
    let newli=$(this).closest("li").find(".xuanze");
    if(cishu%2!==0){
    
    newli.slideUp();
    }
    else{
        newli.slideDown();
    }
})
// 
$("#imgshow").click(function(){
    cishu++;
    $("#imgshow").toggleClass("change")
    if (cishu % 2 !== 0) {
        $(".right-ul").slideDown()
        console.log(1);
    }
    else {
        $(".right-ul").slideUp()
        console.log(2);
    }
})
$("#imgshow1").click(function(){
    cishu++;
    $("#imgshow1").toggleClass("change1")
    if (cishu % 2 !== 0) {
        $(".up-con").slideDown()
        console.log(1);
    }
    else {
        $(".up-con").slideUp()
        console.log(2);
    }
})
// console.log($("lookimg img"));
$(".lookimg img").mouseenter(function(){
    $(this).closest(".lookimg").find(".Klook").show();
})
$(".lookimg").mouseleave(function(){
    $(this).closest(".lookimg").find(".Klook").hide();
})