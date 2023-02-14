const express = require("express")
const dotenv = require("dotenv");
const cors = require("cors");
const connect = require("./utils/dbConnect");
const testRouter = require("./routes/v1/test.route.js")

const mongoose = require("mongoose");
const viewCount = require("./middleware/viewCount");
const { rateLimit } = require("express-rate-limit");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 7000;
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs")


// app.use(viewCount);
// mongoDB connecting using mongoose 
connect();

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
})
mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!")
})



app.use("/api/v1/tests", testRouter)

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "test.html")
    res.render("home.ejs", {
        id: 2,
        user: {
            name: "Hasib"
        }
    })
})

app.all("*", (req, res) => {
    res.send("404 NO ROUTE FOUND!")
})

app.use(errorHandler);
app.listen(port, () => {
    connect()
    console.log(`Connected to Backend on ${port}`)
})

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1)
    })
})