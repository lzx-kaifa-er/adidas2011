
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




//  注册
//cookie
 //写入cookie
 let cookie = {
	// 写入/修改cookie
	set(key,value,expires){
		let d = new Date(expires);
		document.cookie = key + "=" + value + ";expires="+d;
    }
}
 //删除cookie
 function Delete(key) {
     document.cookie = key + "=" + ":expires=" + new Date("1999-01-01");
 }
 //获取cookie
 //思路：应为cookie的返回值是一段字符串， 所以先用split的方法分割成两个数组，然后再定义一个空的对象，拿对象的key里面存储name值，value里面存储获取的值；
 function Read(key) {
     let arr = document.cookie.split("; ");
     var result = {};
     arr.forEach(item => {
         let key = item.split("=")[0];
         let value = item.split("=")[1];
         result[key] = value;
     })
     return result ? result[key] : result;
 } 

//正则表达式
// let minzi = document.querySelector("#iphone1");
// let possword = document.querySelector("#yzm1");
// function fn(exp, _this) {
//     if (exp.test(_this.value)) {
//        _this.style.backgroundColor="green"
//     }
//     else {
//         _this.style.backgroundColor="red"
//     }
// }



 //
 let dl = document.querySelector("#denglu");
 minzi.value=Read("login");
 possword.value=Read("password");
 console.log(minzi);
 console.log(possword);
 console.log(dl);

 dl.onclick=function() {    
    if (document.querySelector("#check").checked) {
        let  newname =  minzi.value;
        console.log(newname);
        let newpassword = possword.value;
        console.log(newpassword);
        let http = new XMLHttpRequest();
        http.open("get", `http://127.0.0.1:8080/login?newname=${newname}&password=${newpassword}`)
        http.send()
        http.onreadystatechange = function () {
            if (http.readyState === 4) {
                if (http.responseText === "success") {
                    alert("登录成功");
                        cookie.set("login", newname, "30");
                        cookie.set("password", newpassword, "30");
                    location.href = "http://127.0.0.1/%e4%ba%8c%e9%98%b6%e6%ae%b5%e9%a1%b9%e7%9b%ae/adidas_1.html"
                }
                else {
                    alert("用户名或密码错误")
                }
            }
        }
    }
}