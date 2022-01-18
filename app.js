const express = require('express');

const timestamp = require('unix-timestamp');

timestamp.fromDate

const app = express();



app.get('/api/:date', (req, res)=>{
    const {date} = req.params;
    console.log(date);
    let dateUnix = 0;
    let dateUTC = "";

    if(date.includes("-")){
    dateUnix = timestamp.fromDate(date);
    dateUTC = date;

    }else{
    dateUnix = Number(date)
    dateUTC = timestamp.add(Number(date), delta)

    }

    
    console.log(dateUnix, dateUTC);  
    return res.status(200).json({success:true, data:{unix:dateUnix,utc:dateUTC}})
    
})





app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})