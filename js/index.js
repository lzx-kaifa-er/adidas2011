
//开始头部
let newshopimg = document.querySelector(".newshop>img");
console.log(newshopimg);
newshopimg.onclick=function(){
    document.querySelector(".newshop").style.display="none"
}
//提示栏
document.querySelector(".head-bottom-ts>img").onclick=function(){
    document.querySelector(".head-bottom-ts").style.display="none";
}
//轮播图 （有点击事件 我先不写）
let oneimg = document.querySelector(".banner-banner")
console.log(oneimg);
oneimg.onclick=function(){
    console.log(oneimg);
}
let bannerlist =document.querySelectorAll(".banner-con-box>ul>li")
let n = 0;
let spead=20;
//假设有两边点击按钮，点击右边；oneimg的margin值变成-1920px；
//右点击事件
let bannerleft =document.querySelector(".banner-left");
let bannerright =document.querySelector(".banner-right");
console.log(bannerleft);
console.log(bannerright);
console.log(bannerlist.length);
bannerright.onclick = function () {
    console.log(1);
    if(n!==bannerlist.length-1){
        n++;
        changimg("bannerright")
    }
    else{
        n=0;
        changimg("bannerleft")
    }
}
bannerleft.onclick = function () {
    if (n!==0) {
        n--;
        changimg("bannerleft")
    }
    else {
        n = bannerlist.length - 1;
        changimg("bannerright")
    }
}
function changimg(dir) {                                        //移动得方法函数。点右边的 让他得marginleft每次增加-1000px；
    let made = setInterval(function () {
        var o = parseInt(oneimg.style.marginLeft);     //找到现在ul得marginleft得值 赋值给变量o；
        if(dir=="bannerright"){                          //然后判断是不是点击了  右边得箭头，要是点击了 ，判断是不是最后一张，不是最后一张就加-1000
            if (o<=-(n*1920)) {                    //要是在最后一张  就结束计时器，然后直接给marginleft赋值  当前n*1000,让它固定在最后一张
                clearInterval(made);
                oneimg.style.marginLeft =-(n*1920)+"px";
                return;
            }
            oneimg.style.marginLeft = o - spead *1 +"px"     
        }
        if (dir=="bannerleft") {                                //判断点击得是左边得案件 每次在当前得基础上+上移动得px；
            if (o>=-(n*1920)) {
                clearInterval(made);
                oneimg.style.marginLeft =-(n*1920)+"px";
                return
            }
            oneimg.style.marginLeft = o + spead *1 +"px"
        }
    }, 16)
}
setInterval(function(){
    bannerleft.click();
},4000)
//导航里面  二级菜单
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




//第二个轮播图
let ullist = document.querySelector("#monthul")
let left = document.querySelector("#monthleft")
let right =document.querySelector("#monthright")
let count = 0;
let lilist = document.querySelector("#monthul>li")
//左击事件；
left.onclick=function(){
    let o = parseInt(ullist.style.marginLeft)
    let op = parseInt(lilist.style.marginRight)
    console.log(op);
    let  move =setInterval(function(){
        let o = parseInt(ullist.style.marginLeft)
        if(o<-304){
            clearInterval(move);
            ullist.style.marginLeft=-304+"px";
            lilist.style.marginLight=1+"%";
            lilist.style.marginRight=0;
            return;
        }
        ullist.style.marginLeft=o-20+"px";
    },16)
}
right.onclick=function(){
    let o = parseInt(ullist.style.marginLeft)
    let  lemove =setInterval(function(){
        let o = parseInt(ullist.style.marginLeft)
        if(o>0){
            clearInterval(lemove);
            ullist.style.marginLeft=0+"px";
            lilist.style.marginRight=1+"%";
            lilist.style.marginLight=0;
            return;
        }
        ullist.style.marginLeft=o+20+"px";
    },16)
}
// ullist.onmouseleave=function(){setInterval(function(){
//     let o = parseInt(ullist.style.marginLeft)
//     let  move =setInterval(function(){
//         let o = parseInt(ullist.style.marginLeft)
//         if(o<-304){
//             clearInterval(move);
//             ullist.style.marginLeft=-380.59+"px";
//             return;
//         }
//         ullist.style.marginLeft=o-20+"px";
//     },16)
//     let op = parseInt(ullist.style.marginLeft)
//     let  lemove =setInterval(function(){
//         let op = parseInt(ullist.style.marginLeft)
//         if(op>0){
//             clearInterval(lemove);
//             ullist.style.marginLeft=0+"px";
//             return;
//         }
//         ullist.style.marginLeft=op+20+"px";
//     },16)
// },3000)}



//第三个轮播图
let weekleft =document.querySelector(".week-left");
let weekright =document.querySelector(".week-right");
let weekullist = document.querySelectorAll(".week-ul>ul");
let weekul =document.querySelector(".week-ul")
let nount =0;
console.log(weekullist);
weekleft.onclick=function(){
    if (nount!==0) {
        nount--;
        threechangimg("bannerleft")
    }
    else {
        nount = weekullist.length - 1;
        threechangimg("bannerright")
    }
}
weekright.onclick=function(){
    if(nount!==weekullist.length-1){
        nount++;
        threechangimg("bannerright")
    }
    else{
        nount=0;
        threechangimg("bannerleft")
    }
}
//自动生成小圆点
let ol= document.querySelector(".ol");
console.log(ol);
for(let i = 0;i<weekullist.length;i++){
    let newli = document.createElement("li")
    ol.appendChild(newli);
    if(i===0){
        newli.className="focus"
    }
}
let ollist = document.querySelectorAll(".ol>li");
for(let i=0;i<ollist.length;i++){
    ollist[i].setAttribute("lzx-index" ,i)       
    ollist[i].onclick=function(){
        nount =  Number (this.getAttribute("lzx-index"))  //获取点击li标签之后的li的lzx-index的值  赋值给n  从而使点击li之后  后面n的值进行改变；
       //这个里面得this  代表得是下面得小圆点。
       threechangimg("bannerright");

    }
}
function threechangimg(dir) {                                        //移动得方法函数。点右边的 让他得marginleft每次增加-1000px；
    let made = setInterval(function () {
        let o = parseInt(weekul.style.marginLeft);     //找到现在ul得marginleft得值 赋值给变量o；
        if(dir=="bannerright"){                          //然后判断是不是点击了  右边得箭头，要是点击了 ，判断是不是最后一张，不是最后一张就加-1000
            // console.log(ollist[nount]);
        //  let n = ollist[nount].getAttribute("lzx-index");
            
            if (o<=-(nount*1280)) {                    //要是在最后一张  就结束计时器，然后直接给marginleft赋值  当前n*1000,让它固定在最后一张
                clearInterval(made);
                weekul.style.marginLeft =-(nount*1280)+"px";
                return;
            }
            weekul.style.marginLeft = o - spead *1 +"px";   
        }
        if (dir=="bannerleft") {                                //判断点击得是左边得案件 每次在当前得基础上+上移动得px；
            if (o>=-(nount*1280)) {
                clearInterval(made);
                weekul.style.marginLeft =-(nount*1280)+"px";
                return
            }
            weekul.style.marginLeft = o + spead *1 +"px"
        }
    }, 16)
    for(var i = 0; i < ollist.length;i++){
        ollist[i].className = ""
    }
    ollist[nount].className = "focus"
}
