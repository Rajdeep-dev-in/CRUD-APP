import user from "../models/dbstructure.js";

// get all data
export async function handelGetData(req, res) {
    try{
        const data = await user.find({}) 
        res.json(data)
    }catch(error){
        res.json(error)
    }
}

// get single data by id
export async function getSingleData(req, res){
    try {
        const {id} = req.params;
        const data = await user.findById({_id: id}) 
        return res.status(200).json(data)
    } catch (error) {
        res.json(error)
    }   
}

// create a new data
export async function handelCreateData(req, res){
    try{
        const {name, address, age, email} = req.body;
        await user.create({
            name: name,
            address: address,
            age: age,
            email: email
        })
        return res.status(201).json({status: "Data added successfully"})
    }catch(error){
        return res.json(error)
    } 
}

// delete data
export async function handelDeleteData(req,res){
    try{
        const { id } = req.params
        await user.findByIdAndDelete({_id: id})
        res.status(200).json({status: "User Deleted Successfully"})
    }catch(error){
        res.json(error)
    }
}

// update user

export async function handelUpdateData(req, res){
    try {
        const {id} = req.params;
        const {name , address, age, email} = req.body;
        await user.findByIdAndUpdate(id,req.body,{
            new: true,
        });
        res.json({status: "Record Updated Successfully"})
    } catch (error) {
        res.json(error)
    }
}

