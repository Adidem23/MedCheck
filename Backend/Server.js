const express = require('express');
const app = express();
const CORS = require('cors');
const PORT = 9000;
const mongoose = require('mongoose');
const UsersDB = require('./Models/User');
const DoctorsDb = require('./Models/Doctors');
const PatientDb = require('./Models/Patients');
const axios = require('axios');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyDfazWK5xqM82qJqxGTfqrWMac6PE8Cz6o");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });


app.use(express.json());
app.use(CORS({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true

}))

mongoose.connect("mongodb://0.0.0.0:27017/HackToCrack").then(() => {
    console.log("Connected To MongoDBCompass");
}).catch((err) => {
    console.log(`${err} is Occured!!`);
})


app.get("/", (req, res) => {
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
        console.log(`New User Has Been Added to UsersDB`);
    }).catch((err) => {
        console.log(`Error While Saving UserResponses : ${err}`)
    })

    if (WebsiteUser.Role === "Doctor") {

        const NewDoctor = new DoctorsDb({
            Name: WebsiteUser.Name,
            Email: WebsiteUser.Email,
        })

        NewDoctor.save().then(() => {
            console.log(`New Doctor Has Been Added to DoctorsDB`);
        }).catch((err) => {
            console.log(`Error While Saving UserResponses : ${err}`)
        })

    } else if (WebsiteUser.Role === "Patient") {

        const NewPatient = new PatientDb({
            Name: WebsiteUser.Name,
            Email: WebsiteUser.Email,
            ImageURL: WebsiteUser.ImageUrl,
            FilledProfile: false
        })

        NewPatient.save().then(() => {
            console.log(`New Patient Has Been Added to PatientsDB`);
        }).catch((err) => {
            console.log(`Error While Saving UserResponses : ${err}`)
        })

    } else {
        console.log("No UserRole is Defined For That");
    }

    res.send("ok");
});

app.get("/getAllPatients", async (req, res) => {
    PatientDb.find().then((patients) => {
        console.log("Patients Data Has Been Sent to Frontend");
        res.send(patients);
    }).catch((err) => {
        console.log(`${err} Occured while Fetching data`);
    })
})

app.get("/getAllDoctors", async (req, res) => {
    DoctorsDb.find().then((doctors) => {
        console.log("Doctors Data Has Been Sent to Frontend");
        res.send(doctors);
    }).catch((err) => {
        console.log(`${err} Occured while Fetching data`);
    })
})


app.post("/CheckPorfile", async (req, res) => {
    const UserMail = req.body.UserEmail;

    PatientDb.findOne({ Email: UserMail }).then((item) => {
        res.send(item.FilledProfile);
    }).catch((err) => {
        console.log(`${err} is Occured`);
    })

})

app.post("/UpdatePatientProfile", async (req, res) => {
    const UserMail = req.body.UserEmail;
    const UpdateData = req.body.UpdateData;

    const query = { Email: UserMail };
    const update = { $set: { BloodGroup: UpdateData.BloodGroup, FilledProfile: true, Weight: UpdateData.Weight, Age: UpdateData.Age } , $push:{MedicalHistory:UpdateData.Disease,Allergy:UpdateData.Allegery} };

    PatientDb.findOneAndUpdate(query, update)
        .then(updatedDocument => {
            console.log("Updated document:", updatedDocument);
        })
        .catch(error => {
            console.error("Error occurred:", error);
        });

})

app.post("/GivePres", async (req, res) => {
    const Drugsdata = req.body.AllMedicines;
    try {

        const responseData = await axios.post(`http://127.0.0.1:8000/check/${Drugsdata[0]}/${Drugsdata[1]}`);

        if (responseData.data === "Notcompatible") {
            const prompt = `How ${Drugsdata[0]} and ${Drugsdata[1]} are not Compatible??`;
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            const Reason = "NotCompatible"
            const Actualtext = {
                text: text,
                Reason: Reason
            }
            res.send(Actualtext);
        } else {
            res.send("Drugs are Compatible");
        }

    } catch {
        err => {
            console.log(`${err} is Occured`);
        }
    }

});

app.listen(PORT, () => {
    console.log(`Server is Running on PORT:${PORT}`)
})