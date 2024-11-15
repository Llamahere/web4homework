//install: node js
//install web server package: express >npm install express
var express = require("express")
var server = express();  //server使用express

var DB = require("nedb-promises"); 
var Profolio = DB.create(__dirname+"/profolio.db");  
Profolio.insert({modal: "#portfolioModal1", imgSrc:"roundicons.png", heading:"Round Icons", text:"Graphic Design"})


//web root
server.use(express.static(__dirname+"/AgencyProject"));   //server讀取資料位置

server.get("/services", (req,res)=>{
    res.send()
})

server.get("/profolio", (req,res)=>{  
 //DB        res.send("Profolio");  

})
server.listen(80, ()=>{
    console.log("Server is running at port 80");
})