const express = require('express');

const dateString = require('./dateString');


const app = express();

 //if there is no date

    
app.get('/api/', (req, res)=>{
    console.log("no date");
    let dateUnix = Date.now()
    let dateUTC = dateString(dateUnix);
    console.log(dateUnix, dateUTC);
    return res.status(200).json({unix:dateUnix,utc:dateUTC})

})




app.get('/api/:date', (req, res)=>{
    let {date} = req.params;
    console.log(`date: ${date}`);
    let dateUTC = "";
    const dateOb = new Date(Number(date));
    let dateUnix = dateOb.getTime();
   
        //if there is a date in a string format
    if(Date.parse(date) === Date.parse(date)){
        console.log("date in string");
            dateUnix = Date.parse(date);
            dateUTC = dateString(dateUnix);
    
            return res.status(200).json({unix:dateUnix,utc:dateUTC})

    }
            
        else if(dateString(Number(date))!== false){   
            console.log("date in unix"); 

            dateUTC = dateString(Number(date));
            return res.status(200).json({unix:dateUnix,utc:dateUTC})
    
        } else {
            console.log("wrong date");
            return res.json({ error : "Invalid Date" });

    }    
    
})





app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})