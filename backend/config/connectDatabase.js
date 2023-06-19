import mongoose from "mongoose";

const connectDatabase = () => {
const databaseURL = "mongodb+srv://shehroz_khushi:ylUcHjmPkBV2u62i@skmarks.trk6ysy.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(databaseURL)
    .then((response)=> {
        console.log("Database connected Successfully!")
    })
    .catch((error)=> {
        console.log("Error:", error)
    })
}

export default connectDatabase;