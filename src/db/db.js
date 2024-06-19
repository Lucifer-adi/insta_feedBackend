import { db_name } from "../contants.js";
import mongoose from "mongoose";

 const connect_db = async ()=>{
    try {
       const connectionInstance =  await mongoose.connect(process.env.MONGODB_URL);
        console.log(`\n MongoDB is connected on port: ${connectionInstance.connection.host} `);
        console.log(connectionInstance.connection.port)
        // conection instance has many things to learn
    } catch (error) {
        console.log("MongoDB connection error: ",error);
       
    }
}
export default connect_db;