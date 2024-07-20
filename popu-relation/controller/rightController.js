const Right = require("../models/rightModel");

exports.createRight = async(req,res)=>{
    const {staff_id, right} = req.body;
    const rightData = await Right.create({
        staff_id,
        right
    })
    await rightData.save();
    return res.send(rightData);
}

exports.staffByRight = async(req, res)=>{
    const {right_id} = req.body;
    const staff = await Right.find({_id:right_id})
    .populate({
        path: 'staff_id',
        // match:{email:{$regex:'.*GMAIL.*',$options:"i"}}
        select:["name","email"],
        options: { sort: { name: 1 } }
    });
    
    return res.send(staff);
}