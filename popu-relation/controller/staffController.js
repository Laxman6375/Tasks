const Staff = require("../models/staffMOdels");

exports.createStaff = async(req,res)=>{
    const {name,email} = req.body;
    const staff = await Staff.create({
        name,
        email
    })
    await staff.save();
    return res.send(staff);
}

 