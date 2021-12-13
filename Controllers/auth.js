
const jwt=require('jsonwebtoken')
const expressjwt=require('express-jwt')


exports.login=(req,res)=>{
    const {name,password}=req.body;
    if(password===process.env.PASSWORD){

      const token=jwt.sign({name},process.env.JWT_SECRET, {expiresIn:'2d'})
      return res.json({name,token})
    }else{
      return res.status(400).json({
        error:'Incorrect Password'
      })
    }
}