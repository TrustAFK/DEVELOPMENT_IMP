const express = require("express");   // EXPRESS
const mongoose = require("mongoose");  // MONGOOSE

const PinSchema = new mongoose.Schema(   // SCHEMA
    {
      username: {
        type: String,
        required: true,
      }}
      )

const app = express() // APP CREATED
app.use(express.json());

mongoose 
  .connect("mongodb+srv://admin:admin123@cluster0.vpqmtlw.mongodb.net/?retryWrites=true&w=majority", { //THE MONGOOSE IS BEING CONNECTED
        useNewUrlParser: true,
        useUnifiedTopology: true,  })   
 .then(() => console.log("MongoDB connected!")) 
 .catch(err => console.log(err));


 const Pin =  mongoose.model("Pin", PinSchema); // MODEL IS BEING MADE OUT OF SCHEMA



app.get("/", (req, res) => {  // APPP IS WORKING IN GET
    res.status(200).send("hello world");
  });   

app.post("/", (req, res) => {  // APP IS WORKING IN "POST" + THE SCHEMA IS BIENG USED AS WE ARE ABLE TO CREATE A THING .
    const newPin = new Pin(req.body);
    try {
        res.status(200).json(newPin);
        console.log(newPin);
    } catch (err) {
      res.status(500).json(err);
      console.log(err)
    }
});

app.listen(3000,()=>{ // THE APP IS WORKING ON 3000 PORT
    console.log("listening http://localhost:3000/")
})
