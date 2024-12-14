import Usermodel from "../models/Usermodel.js"

const addto = async (req,res) => {
 try {
    let userData = await Usermodel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
        cartData[req.body.itemId] = 1
    } else {
        cartData[req.body.itemId] += 1;
    }
    await Usermodel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({success:true,message:"ADD TO CART"})
 } catch (error) {
    console.log(error);
    res.json({success:false,message:'ERror'});
    
 }
}

const remove = async (req,res) => {
    try {
    let  userData = await Usermodel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] >0) {
        cartData[req.body.itemId] -= 1;
    }
    await Usermodel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({success:true,message:"REMOVE TO CART"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"ERROr"})
    }
    
}

const getcart = async (req,res) => {
    try {
        let  userData = await Usermodel.findById(req.body.userId);
        let cartData = await userData.cartData; 
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"ERROr"})
        
    }
}

export {addto , remove , getcart}