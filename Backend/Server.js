const express=require('express');
const app=express();
const CORS=require('cors');
const PORT=9000;
const mongoose = require('mongoose');
const UsersDB=require('./Models/User');


app.use(express.json());
app.use(CORS({
    origin:"http://localhost:5173",
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true

}))

mongoose.connect("mongodb://0.0.0.0:27017/HackToCrack").then(() => {
    console.log("Connected To MongoDBCompass");
}).catch((err) => {
    console.log(`${err} is Occured!!`);
})


app.get("/",(req,res)=>{
    res.send("Hello Welcome Baby!!");
})

app.post("/CheckRole", async (req, res) => {
    const UserEmail = req.body.Email;

    try {
        const OneUser = await UsersDB.find({ Email: UserEmail });
        if (OneUser) {
            res.send(OneUser[0].Role);
        } else {
            res.send("");
        }
    } catch {
        res.send("");
    }

})


app.post('/RegisterUser', async (req, res) => {
    const WebsiteUser = req.body.User;

    const Newuser = new UsersDB({
        Name: WebsiteUser.Name,
        Email: WebsiteUser.Email,
        Role: WebsiteUser.Role
    })

    Newuser.save().then(() => {
        console.log(`New User Has Been Added`)
    }).catch((err) => {
        console.log(`Error While Saving UserResponses : ${err}`)
    })

    res.send("ok");
});


app.listen(PORT,()=>{
    console.log(`Server is Running on PORT:${PORT}`)
})