let hist = require("express")();
const { error } = require("console");
let mysql = require("mysql");
const port = 8080;
hist.all("/*", function (req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})
//规划数据库链接
let sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shop",
})
//尝试连接数据库
sql.connect();
//登录验证
hist.get("/login", (request, response) => {
    let newname = request.query.newname;
    let password = request.query.password;
    console.log(newname);
    console.log(password);
    sql.query(`SELECT * FROM shopname WHERE name="${newname}" AND password="${password}"`, (error, data) => {
        if (error) {
            response.send("error");
            console.log(error);
        }
        else {
            if (!data.length) {
                response.send("error");
            }
            else {
                response.send("success")
            }
        }
    })
})
//注册验证
hist.get("/regist", (request, response) => {
    let newname = request.query.newname;
    let password = request.query.password;
    sql.query(`INSERT INTO shopname (name,password)VALUES("${newname}","${password}")`, (error, data) => {
        if (error) {
            console.log(error);
            response.send("error");
        }
        else {
            response.send("success")
        }
    })
})
//商品页  获取数据
hist.get("/getbrowse", (request, response) => {
    sql.query(`SELECT * FROM browse`, (error, data) => {
        if (error) {
            console.log(error);
            response.send("error");
        }
        else {
            // console.log(data);
            response.send(data)
        }
    })
})


//详情页 获取数据
hist.get("/getpage", (request, response) => {
    let newid = request.query.name;
    // console.log(newname);
    sql.query(`SELECT * FROM browse WHERE id=${newid}`, (error, data) => {
        if (error) {
            console.log(error);
            response.send("error");
        }
        else {
            // console.log(data);
            response.send(data)
        }
    })
})



//购物车  先加入
hist.get("/addpage", (request, response) => {
    let newid = request.query.id;
    let newname = request.query.name;
    let xiejiage = request.query.xiejiage;
    let url = request.query.url;
    let shuzi = request.query.shuzi;
    let shuliang = request.query.shuliang;
    console.log(shuliang);
    // console.log(newname);
    sql.query(`INSERT INTO shopping(id,name,jiage,url,mashu,shuliang) VALUES ("${newid}","${newname}","${xiejiage}","${url}","${shuzi}","${shuliang}")`, (error, data) => {
        if (error) {
            console.log(error);
            response.send("error");
        }
        else {
            console.log(data);
        }
    })
})
//购物车
hist.get("/getshopping", (request, response) => {
    sql.query(`SELECT * FROM shopping `, (error, data) => {
        if (error) {
            console.log(error);
            response.send("error");
        }
        else {
            console.log(data);
            response.send(data)
        }
    })
})
//删除购物车
hist.get("/deletshop", (request, response) => {
    let newminzi=request.query.name
    sql.query(`DELETE FROM shopping WHERE name="${newminzi}"; `, (error, data) => {
        if (error) {
            console.log(error);
            response.send("error");
        }
        else {
            console.log(data);
            response.send("success")
        }
    })
})
//修改
hist.get("/updatashop", (request, response) => {
    let newshu=request.query.shu;
    let mi = request.query.name;
    console.log(mi);
    console.log(newshu);
    sql.query( `UPDATE shopping SET shuliang="${newshu}" WHERE name="${mi}" `, (error, data) => {
        if (error) {
            console.log(error);
            response.send("error");
        }
        else {
            console.log(data);
            response.send("success")
        }
    })
})
hist.listen(port);
console.log("server is running at " + port);
