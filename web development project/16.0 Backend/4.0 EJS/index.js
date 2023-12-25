import express from "express";

const port = 3000;
const app = express();
//const d = new Date();
const d = new Date('Feburary 23, 2024 23:15:30');
let day = d.getDay();
var dayTypeVal = "a weekday";
var adviceVal = "It's time to work hard.";


function isWeekDay(req, res, next){
    if(day === 0 || day === 6){
        dayTypeVal = "a weekend";
        adviceVal = "It's time to have fun.";
    }
    next();
}

app.use(isWeekDay);

app.get("/", (req, res)=>{
    
    res.render("index.ejs", {
            dayType: dayTypeVal, advice: adviceVal
    });
});

app.listen(port, ()=>{
    console.log(`listening to port:${port}`);
});