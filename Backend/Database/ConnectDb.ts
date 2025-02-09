import mongoose from "mongoose"
export const ConnectDB = (Url : string)=>{
    mongoose.connect(Url)
    .then(()=>{
        console.log("Database Connected Successfully");
    })
    .catch((error) =>{
        console.log(`Unable to connect Database \n${error}`);
    })
}