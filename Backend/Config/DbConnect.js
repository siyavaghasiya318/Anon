import mongoose from "mongoose"

  const DbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("suceessfully connected Db");
    } catch (error) {
        console.log("DBconnection error", error);
        
    }
}

export default DbConnection