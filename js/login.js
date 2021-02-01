
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

// 正则表达式
let minzi = document.querySelector("#iphone1");
let possword = document.querySelector("#yzm1");
function fn(exp, _this) {
    if (exp.test(_this.value)) {
       _this.style.backgroundColor="green"
    }
    else {
        _this.style.backgroundColor="red"
    }
}

//注册
 let iphone = document.querySelector("#iphone")
 let yzm =document.querySelector("#yzm")
 let regist =document.querySelector("#zhuce")
 let  submit = document.querySelector("#get")
 console.log(submit);
 //思路：给登录添加点击事件，再这个里面写ajax的请求;
 iphone.onkeyup=function(){
    fn(/^1[538]\d{9}$/, this)
}
 submit.onclick=function () {
     console.log(1);
     let newiphone = iphone.value;
     let newyzm=yzm.value;
     if (iphone.style.backgroundColor==="green") {
         console.log(1);
         let http = new XMLHttpRequest();
         http.open("get", `http://127.0.0.1:8080/regist?newname=${newiphone}&password=${newyzm}`)
         http.send()
         http.onreadystatechange = function () {
             if (http.readyState === 4) {
                 if (http.responseText === "success") {
                     alert("注册成功")
                     regist.onclick=function(){
                         if(document.querySelector("#checke").checked){
                        location.href="http://127.0.0.1/%e4%ba%8c%e9%98%b6%e6%ae%b5%e9%a1%b9%e7%9b%ae/adidas_1.html";
                        cookie.set("login", newname, "30");
                     cookie.set("password", newpassword, "30");
                    }
                }
                 }
                 else {
                     alert("用户名或密码错误")
                 }
             }
         }
     }
     else{
         alert("输入的电话号码有误，请重新输入")
     }
 }
 
 let cookie = {
	// 写入/修改cookie
	set(key,value,expires){
		let d = new Date(expires);
		document.cookie = key + "=" + value + ";expires="+d;
    }
}