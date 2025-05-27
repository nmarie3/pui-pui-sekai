import mongoose from "mongoose";

//get the uri from the env file *its protected hence it's in the env file
const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    //check if connection is already connected - error handling
    const connectionState= mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log("Already connected");
        return;
    }

    if (connectionState === 2) {
        console.log("connecting...");
        return;
    }

    //if the above two fail
    try {
        mongoose.connect(MONGODB_URI!, {
            dbName: "puipuisekairestapi",
            bufferCommands: true,
         });
         console.log("Connected");
    } catch (err: any) {
        console.log("Error: ", err);
        throw new Error("Error: ", err);
    }
};

export default connect;