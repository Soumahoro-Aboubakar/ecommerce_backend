import Address from "../models/Address.js"

 const create = async(req,res)=>{
    try {
        const created=new Address(req.body)
        await created.save()
        res.status(201).json(created)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error adding address, please trying again later'})
    }
}

 async function getByUserId(req, res) {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }
        
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }
        const results=await Address.find({user:id})
        res.status(200).json(results)
    
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error fetching addresses, please try again later'})
    }
}

 async function updateById(req, res) {
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }
        
        const updated = await Address.findByIdAndUpdate(id, req.body, { new: true });

        if (!updated) {
            return res.status(404).json({ message: 'Record not found' });
        }

        console.log(updated);
        res.status(200).json(updated);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating record, please try again later' });
    }
}

 async function deleteById(req,res){
    try {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }
        const deleted=await Address.findByIdAndDelete(id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error deleting address, please try again later'})
    }
}


export default {
    create,getByUserId,updateById,deleteById
}