import mongoose from "mongoose";

const MongoURL = process.env.MONGO_URI ? process.env.MONGO_URI : "mongodb://localhost:27017/express-mongo";

function connect() {

    mongoose.connect(MongoURL).then(() => {
        console.log("Connected to MongoDB");
    }
    ).catch((err) => {
        console.error(err);
    });
}

export default connect;