const connetions = require('./connections');


const getTestimonial = async(req,res)=>{
    await connetions.query('SELECT * FROM testimonials',(err,results)=>{
        if(err) return res.status(500).json({message:err});
        return res.status(200).json({message:results});
    })
}


const postTestimonial = async(req,res)=>{
    const{name,subject,compony_name} = req.body;

    await connetions.query('INSERT INTO testimonials(name,subject,compony_name) values (?,?,?)',[name,subject,compony_name],(err,results)=>{
        if(err) return res.status(500).json({message:err});
        return res.status(200).json({message:"data inserted successfully."});
    })
}


module.exports = {getTestimonial,postTestimonial}