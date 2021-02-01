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


//返回
$("#goback").click(function(){
    console.log(1);
    location.href="http://127.0.0.1/%e4%ba%8c%e9%98%b6%e6%ae%b5%e9%a1%b9%e7%9b%ae/browse.html"
})
$("#gohome").click(function(){
    location.href="http://127.0.0.1/%e4%ba%8c%e9%98%b6%e6%ae%b5%e9%a1%b9%e7%9b%ae/adidas_1.html"
})


//放大镜
let div = document.querySelector(".mask")
let plus = document.querySelector("#bigimg>img")
let imglist = document.querySelectorAll(".left-ul img")
console.log(imglist);
let maximg = document.querySelector(".maximg img")
for (let i = 0; i < imglist.length; i++) {
    imglist[i].onclick = () => {
        plus.src = imglist[i].src;
        console.log(1);
    }
}
plus.onmouseenter = () => {
    div.style.display = "block"
    document.querySelector(".maximg").style.display = "block"
    console.log(plus.src);
    maximg.src = plus.src;
    this.onmousemove = function (event) {
        let point = {
            x: event.offsetX,
            y: event.offsetY,
        }
        let n = plus.offsetHeight / parseInt(point.y);
        let n2 = plus.offsetHeight / parseInt(point.x);
        //不加边界
        div.style.top = parseInt(point.y) - parseInt(div.offsetHeight) / 2 + "px";
        div.style.left = parseInt(point.x) - parseInt(div.offsetWidth) / 2 + "px";
        //加边界
        // if(parseInt(point.y) - parseInt(dioffsetHeight) / 2 < 0 ){
        //     div.style.top =0 + "px";
        // }
                // if(parseInt(point.y) + parseInt(div.offsetHeight)/2 >parseInt(plus.offsetHeight)){
                //     div.style.top=parseInt(plus.offsetHeight)-parseInt(div.offsetHeight) +"px"
                // }
                // if(parseInt(point.x)+ parseInt(div.offsetHeight)/2 >parseInt(plus.offsetHeight)){
                //     div.style.left=parseInt(plus.offsetHeight)-parseInt(div.offsetHeight) +"px"
                // }
                // if(parseInt(point.x)- parseInt(div.offsetHeight)/2 < 0){
                //     div.style.left=-0+"px"
                // }
                maximg.style.left = -maximg.offsetHeight * (1/n2) + parseInt(div.offsetHeight)*1.5+"px";
                maximg.style.top = -maximg.offsetHeight * (1/n) + parseInt(div.offsetHeight)*1.5+"px";

            }

            //前面的思路；plus所在的鼠标移上事件，让他两个都显示 （div/max），然后再一个鼠标移动事件给div赋值  就可以了，但是要减去他自身的一半 ，让鼠标显示再中间；
            //后面的思路；找到比例然后按照比例给最大的图片赋值，改变他的top和left值 ；和此时的div成一定比例相等；

}
plus.onmouseleave = () => {
     div.style.display = "none"
    document.querySelector(".maximg").style.display = "none"
}


//第1个轮播图
let ullist = document.querySelector("#oneimg")
let itop = document.querySelector(".i-top")
let ibottom =document.querySelector(".i-bottom")
let count = 0;
//左击事件；
itop.onclick=function(){
    let o = parseInt(ullist.style.marginTop)
    // let op = parseInt(lilist.style.marginRight)
    // console.log(op);
    let  move =setInterval(function(){
        let o = parseInt(ullist.style.marginTop)
        if(o<-64){
            clearInterval(move);
            ullist.style.marginTop=-64+"px";
            return;
        }
        ullist.style.marginTop=o-2+"px";
    },16)
}
ibottom.onclick=function(){
    let o = parseInt(ullist.style.marginTop)
    let  lemove =setInterval(function(){
        let o = parseInt(ullist.style.marginTop)
        if(o>10 ){
            clearInterval(lemove);
            ullist.style.marginTop=10+"px";
            return;
        }
        ullist.style.marginTop=o+2+"px";
    },16)
}
//
let cishu=0;
$("#cima").click(function(){
    cishu++;
    $("#cima").toggleClass("change")
    if (cishu % 2 !== 0) {
        $(".ipt-box").slideDown()
    }
    else {
        $(".ipt-box").slideUp()
    }
})
// $(".ipt-box span").click(function(){

// })

console.log(213123);

let weekleft =document.querySelector(".week-left");
let weekright =document.querySelector(".week-right");
let weekullist = document.querySelectorAll(".week-ul>ul");
let weekul =document.querySelector(".week-ul")
let nount =0;
let spead=20;
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



//获取name值
let lname = location.search;
let  newname = lname.slice(lname.length-1,lname.length);
let http=new XMLHttpRequest;
http.open("get",`http://127.0.0.1:8080/getpage?name=${newname}`);
http.send();
http.onreadystatechange=function(){
    if(http.readyState===4){
        let data = JSON.parse(http.responseText)
        $(".xname").html(data[0].xiename);
        $(".jiage").html("￥"+data[0].jiage)
        $(".tishi-img img").attr("src",data[0].url)
        $(".left-ul img").attr("src",data[0].url);
        $(".bigimg").attr("src",data[0].url);
    }  
}

//
$(".ipt-box span").click(function(){
    $(".ipt-top span").html($(this).html())
    $(".ipt-box").slideUp();
})

console.log($(".shuliang").html());
//点击跳转
$(".sc-shop").click(function(){
    console.log(1);
    let lname = location.search;
    let  newid= lname.slice(lname.length-1,lname.length);
    let shuzi = $(".ipt-top span").html();
    console.log(shuzi);
    let xiename = $(".xname").html();
    let xiejiage = $(".jiage").html();
    let xieimg = $(".tishi-img img").attr("src");
    let shuliang = $(".shuliang").html();
    let http=new XMLHttpRequest;
    http.open("get",`http://127.0.0.1:8080/addpage?id=${newid}&name=${xiename}&xiejiage=${xiejiage}&url=${xieimg}&shuzi=${shuzi}&shuliang=${shuliang}`);
    http.send();
    http.onreadystatechange=function(){
        if(http.readyState===4){
            console.log(1);
        }  
    }
 location.href="http://127.0.0.1/%e4%ba%8c%e9%98%b6%e6%ae%b5%e9%a1%b9%e7%9b%ae/shop.html"
})