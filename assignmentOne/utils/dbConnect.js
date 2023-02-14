// import mongoose from "mongoose";
const mongoose = require("mongoose")

mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MongoDB);
        console.log("Connected to mongoDB!");
    } catch (error) {
        // handleError(error);
        throw error
    }
}
module.exports = connect;