const express = require("express");   // EXPRESS
const mongoose = require("mongoose");  // MONGOOSE

const PinSchema = new mongoose.Schema(   // SCHEMA
    {
      user: String
    }
      )

const app = express() // APP CREATED
app.use(express.json());

mongoose 
  .connect("mongodb+srv://admin:admin123@cluster0.vpqmtlw.mongodb.net/?retryWrites=true&w=majority", { //THE MONGOOSE IS BEING CONNECTED
        useNewUrlParser: true,
        useUnifiedTopology: true,  })   
 .then(() => console.log("MongoDB connected!")) 
 .catch(err => console.log(err));


 const Pin =  mongoose.model("Devimp", PinSchema); // MODEL IS BEING MADE OUT OF SCHEMA

//  can not name a collection as "PIN" 


app.get("/", (req, res) => {  // APPP IS WORKING IN GET
    res.status(200).send("hello world");
  });   

  app.post("/addname", (req, res) => {
    var myData = new Pin(req.body);
    console.log(myData)
  
    myData.save()
    .then(item => {
      console.log(myData);
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
  }
  )  

app.listen(3000,()=>{ // THE APP IS WORKING ON 3000 PORT
    console.log("listening http://localhost:3000/")
})
