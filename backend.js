// routes to fetch the data from data base and pass it to props on get request 
//use express ,nodemon,and database kunal bhaiyya has told 
 let mongoose= require('mongoose')
 let express=require('express')
 let app=express()
 let port=5000;

 app.get('/',()=>{             //fetch data over get request and send it to react 
    

 })
 app.listen(port,()=>{

    console.log("the App is running at port 5000")
 }
 )