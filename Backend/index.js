import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from "dotenv";
import { connect } from 'mongoose';
import companyRoute from "./routes/company.route.js"
import jobRoute from './routes/job.route.js'
import applicationRoute from './routes/application.route.js'
// import connect from 'mongoose'
import connectDB from './utils/db.js';
import userRoute from './routes/user.routes.js';
// import path from 'path';



dotenv.config({})
const app = express();

// const _dirname = path.resolve();




// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const corsOptions = {
    origin: ["http://localhost:5173"],
    credentials: true,
};

// const cors = require('cors');
// app.use(cors());


app.use(cors(corsOptions));

const PORT = process.env.PORT || 5001;


app.use(express.json());


// console.log("Mounting user routes at", "/api/users");
// console.log("Mounting company routes at", "/api/company");
// console.log("Mounting job routes at", "/api/job");
// console.log("Mounting application routes at", "/api/application");

// api's

app.use("/api/users", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);
// "http://localhost:5011/api/users/register"
// "http://localhost:5011/api/users/login"
// "http://localhost:5011/api/users/profile/update"


// code for deployment

// if (process.env.NODE_ENV === "production") {
//     const dirpath = path.resolve();
//     app.use(express.static('./Frontend/dist'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(dirpath, './Frontend/dist', 'index.html'));
//     });
// }


// app.use(express.static(path.join(_dirname, "/Frontend/dist" )));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html" ));
// });


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);

})