const express = require('express')
const path = require('path')
const app = express()

app.listen(1996,(err)=>{

err?console.log(err):console.log('every thing is good the server is yemchi ')

})
const verifTime = (req, res, next) => {
    let time = new Date();
    if (
      time.getDay() <= 5 &&
      time.getDay() >= 1 &&
      time.getHours() < 17 &&
      time.getHours() >= 9
    ) {
        console.log("is open")
      next(); 
    } else 
    res.sendFile(path.join(__dirname,'htmls','Closed.html')), { time: time.toUTCString() }
    
  };

  app.use(verifTime);

app.use(express.static('htmls'))