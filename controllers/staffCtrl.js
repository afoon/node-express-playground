const {staff} = require('../models');

const getStaff = (req,res,next)=>{
    res.json(staff[req.params.id]);
}

module.exports = {
    getStaff
}