import mongoose from "mongoose";
// import {company} from  "../models/company.model.js";
const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
    },
    description: {
        type: String,
    },
    website: {
        type: String,
        // required: true,
    },
    location: {
        type: String,
    },
    logo: {
        type: String, // URL for logo

    },

    userId: [{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    ],
}, {
    timestamps: true,
});

export const Company = mongoose.model("Company", companySchema);