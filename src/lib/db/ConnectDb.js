// import mongoose from "mongoose";
// export async function ConnectDb() {
//     try {
//         let connection ;
//         connection = await mongoose.connect(process.env.MONGODB_URL);
//         console.log("Database connected")
//         return connection
//     }
//     catch(err){
//         console.log(" Database not connected",err)
//     }   
// }

import mongoose from 'mongoose';

const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
    // Already connected
    return;
  }
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,  // Timeout after 5 seconds
  });
};
export default connectDb;
