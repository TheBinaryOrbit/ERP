import { Request , Response } from "express";
import { className } from "../Models/class";

export const addclass =async ( req : Request ,res : Response ) : Promise<any>=>{
    try {
        if(!req.body.className  || !req.body.fee || !req.body.section || !req.body.subjects ) return res.status(400).json({"error" : "All Fields Are Required"});
        
        const result = await className.create({
            className : req.body.className,
            section : req.body.section,
            subjects : req.body.subjects,
            fee : req.body.fee
        });

        if(!result) return res.status(500).json({"error" : "Unable To Add Class"});
        return res.status(201).json({"message" : "Class Added Sucessfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({"error" : "Internal Server Error : Unable To Add Class"});
    }
}


export const updateClass = async ( req : Request ,res : Response ) : Promise<any>=>{
    try {
        const id = req.params.id
        if(id.length != 24) return res.status(400).json({"error" : "Invalid Class Id"});

        const result = (await className.findByIdAndUpdate(id , req.body , {new : true}));

        if(!result) return res.status(500).json({"error" : "Unable To Update  Class"});
        return res.status(201).json({"message" : "Class Update Sucessfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({"error" : "Internal Server Error : Unable To Update  Class"});
    }
}