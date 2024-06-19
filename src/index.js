// import mongoose from "mongoose";
//  import { db_name } from "./contants.js";
 import  connect_db  from "./db/db.js";
// require('dotenv')
import dotenv from "dotenv"
dotenv.config({ path: './env'})

// console.log(process.env)
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL} ${db_name}`);
//     console.log("Your are connected at PORT: ",process.env.PORT)
//   } catch (error) {
//     console(error);
//     throw error;
//   }
// })();

connect_db();