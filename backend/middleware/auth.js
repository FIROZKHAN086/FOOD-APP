import jwt from "jsonwebtoken"

const authmiddel = async (req,res,next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false,message:"login Please"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:'ERror'})
        
    }
}

export default authmiddel;