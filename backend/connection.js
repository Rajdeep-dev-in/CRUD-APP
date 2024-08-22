import mongoose from "mongoose";

async function createConnection(url){
    return mongoose.connect(url)
}

export default createConnection;