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




//先获取数据
let http=new XMLHttpRequest;
http.open("get",`http://127.0.0.1:8080/getshopping`);
http.send();
http.onreadystatechange=function(){
    if(http.readyState===4){
        let data = JSON.parse(http.responseText)
        data.forEach(item => {
            let newdiv = $("#node").clone(true).attr("id","")
            $(".bigbox").append(newdiv);
            $(".minzi").html(item.name);
            $(".four").html(item.jiage)
            $(".moban-img img").attr("src",item.url)
            $("#displaySizeS24185").html(item.mashu)
            $(".zongjia").html(item.jiage)
            $(".shuliang").html(item.shuliang)
        });
        
    }  
}
function fnn(o){
    let q =$(".four").html();
    let p =q.slice(1,q.length)
    let zongjia = o * p;
    // console.log(zongjia);
    $(".zongjia").html("￥"+zongjia)
}

//算法  加减并且修改 数据库
$(".jia").click(function(){
    let o = $(".shuliang").html()
    o++;
    $(".shuliang").html(o);
    fnn(o);
    counter();
    let shu = $(".shuliang").html();
    let mi = $(".minzi").html()
    let http=new XMLHttpRequest;
    http.open("get",`http://127.0.0.1:8080/updatashop?shu=${shu}&name=${mi}`);
    http.send();
    http.onreadystatechange=function(){
        if(http.readyState===4){
            if(http.responseText==="scuess"){
                history.go(0);
            }
        }  
    }
})
$(".jian").click(function(){
    let o = $(".shuliang").html()
    if(o>=1){
    o--;
    $(".shuliang").html(o);
    fnn(o);
    counter();
    }
})
$(".moban input").click(function(){
    counter();
})
let a =0
$("#check").click(function(){
    a++;
    if(a%2!=0){
    let checklist = $(".moban input");
    checklist.each(function(index,node){
        node.checked="ture";
        counter();
    })
    }
    else{
        let checklist = $(".moban input");
        checklist.each(function(index,node){
        node.checked="flase";
    })
    }
})
function counter(){
    let checklist = $(".moban input")
    let count = 0;
    let zong =0;
    checklist.each(function(index,node){
        if(node.checked){
            $(".shopjiage").html($(".four").html())
            let q = $(".zongjia").html().slice(1,$(".zongjia").html().length);
            let w =  $(".shuliang").html()
            console.log(w);
            count =count+Number(q);
            console.log(count);
            zong = zong + Number(w)
            console.log(zong);
        }
        else{
            $(".shopjiage").html(0)
        }
        $(".shopzongjia").html("￥"+count);
        $(".dingdan-zj").html("共"+zong+"件")
    });
    if(checklist.length==0){
        $(".shopzongjia").html(0);
        $(".dingdan-zj").html("共"+0+"件")
        $(".shopjiage").html(0)
    }
}

$(".delet").click(function(){
    let newminzi = $(".minzi").html()
    console.log(newminzi);
    let http=new XMLHttpRequest;
    http.open("get",`http://127.0.0.1:8080/deletshop?name=${newminzi}`);
    http.send();
    http.onreadystatechange=function(){
    if(http.readyState===4){
        if(http.responseText==="success"){
            location.reload();
        }
    }  
}   
})






