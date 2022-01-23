


const dateString = (timestamp) =>{
    const dateOb = new Date(timestamp);
    let dayWeek = "";
    let month = "";


    
    
    switch (dateOb.getUTCDay()){
        case 0:
            dayWeek="Sun";
            break;
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
        

        default:
            dayWeek = "";
            break;      
        

    }
    console.log(`dayWeek: ${dayWeek}`);

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

        default: 
            month = ""; 
            break;       

    }
    let dateStr = ('0'+ (dateOb.getUTCDate())).slice(-2);
    let hourStr = ('0'+ (dateOb.getUTCHours())).slice(-2);
    let minStr = ('0'+ dateOb.getUTCMinutes()).slice(-2);
    let secStr = ('0'+ dateOb.getUTCSeconds()).slice(-2);

    dateUTC = `${dayWeek}, ${dateStr} ${month} ${dateOb.getFullYear()} ${hourStr}:${minStr}:${secStr} GMT`
    
    if (dayWeek !==""){
        return dateUTC;
    }
    else {
        return false;
    }

    
    

}



module.exports = dateString;