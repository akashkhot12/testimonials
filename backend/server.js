const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const testimonials = require('./routes')

app.use(cors());
app.use(express.json());


app.use('/testimonials',testimonials)


app.listen(PORT,()=>{
    console.log("server is start on port",PORT);
})


