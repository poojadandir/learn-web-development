import express from 'express';
const port = 3000;

const app = express();
app.listen(port, ()=> {
    console.log(`Application is listening on port ${port}`);
});

app.get("/", (req, res)=>{
   // console.log(req.header);
   res.send("<h1>Hi Pooja</h1>");
});

app.get("/contact", (req, res)=>{
    res.send("<h1>My contact</h1>");
});

app.get("/about", (req, res)=>{
    res.send("<h1>About Pooja</h1>");
});