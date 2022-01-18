const express = require('express');

const timestamp = require('unix-timestamp');

timestamp.fromDate

const app = express();



app.get('/api/:date', (req, res)=>{
    const {date} = req.params;
    console.log(date);
    let dateUnix = 0;
    let dateUTC = "";
    let dayWeek = "";
    let month = "";

    if(date.includes("-")){
    dateUnix = timestamp.fromDate(date);
    dateUTC = date;

    }else{
    let dateOb = new Date(Number(date));
    dateUnix = Number(date)
    
    switch (dateOb.getUTCDay()){
        case 1:
            dayWeek="Mon";
            break;
        case 2:
            dayWeek="Tue";
            break;
        case 3:
            dayWeek="Wed";
            break;
        case 4:
            dayWeek="Thu";
            break;
        case 5:
            dayWeek="Fri";
            break;
        case 6:
            dayWeek="Sat";
            break;
        case 7:
            dayWeek="Sun";
            break;

    }

    switch (dateOb.getUTCMonth()){
        case 0:
            month="Jan";
            break;
        case 1:
            month="Feb";
            break;
        case 2:
            month="Mar";
            break;
        case 3:
            month="Apr";
            break;
        case 4:
            month="May";
            break;
        case 5:
            month="Jun";
            break;
        case 6:
            month="Jul";
            break;
        case 7:
            month="Aug";
            break;
        case 8:
            month="Sep";
            break;
        case 9:
            month="Oct";
            break;
        case 10:
            month="Nov";
            break;
        case 11:
            month="Dec";
            break;
        

    }
    dateUTC = `${dayWeek}, ${dateOb.getUTCDate()} ${month} ${dateOb.getFullYear()} ${dateOb.getUTCHours()}:${dateOb.getUTCMinutes()}:${dateOb.getUTCSeconds()} GMT`

    }

    
    console.log(dateUnix, dateUTC);  
    return res.status(200).json({success:true, data:{unix:dateUnix,utc:dateUTC}})
    
})





app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})