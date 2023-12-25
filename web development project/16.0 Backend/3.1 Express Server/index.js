import express from 'express';
const app = express();
const port = 3000;
app.listen(port, () =>{
    console.log(`My App listening to the port ${port}`);
});