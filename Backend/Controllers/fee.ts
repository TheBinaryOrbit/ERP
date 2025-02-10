import { Request , Response } from "express";
import { fee } from "../Models/fee";

export const addfee =async ( req:Request , res :Response) : Promise<any> =>{
    try {
        const id =  req.params.id;
        if(id.length != 24) return res.status(400).json({"error" : "Invalid Fee Id"});

        if(!req.body.paymentMode) return res.status(400).json({"error" : "Payment Mode is required"});

        const result = await fee.findByIdAndUpdate(id , {
            $set : {
                paymentStatus : true,
                paymentMode : req.body.paymentMode,
                transactionId : req.body?.transactionId
            }
        });

        if(!result) return res.status(500).json({"error" : "Unable to add fee"});
        return res.status(200).json({"message" : "Fee Added Sucessfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({"error" : "Internal Server Error : Unable to add fee"});
    }
}