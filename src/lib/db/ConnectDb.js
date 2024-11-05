import mongoose from "mongoose";
export async function ConnectDb() {
    try {
        let connection ;
        connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected")
        return connection
    }
    catch(err){
        console.log(" Database not connected",err)
    }   
}


