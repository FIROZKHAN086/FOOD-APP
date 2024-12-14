import mongooes from 'mongoose'

const userSchema = new mongooes.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  cartData:{type:Object,default:{}}
},{minimize:false}) 

const Usermodel = mongooes.model.user || mongooes.model("user",userSchema);
export default Usermodel;