const express=require('express');
const app=express();
const cors=require('cors');
require('./db/config');

const User=require('./db/User');

// app.post('/signup')
app.use(express.json());
app.use(cors());
app.post('/signup',async(req,res)=>{

    try{
        const email=req.body.email;
        const password=req.body.password;
        const data=new User(req.body);

        const AnyUser=await User.findOne({email});
        if(AnyUser){
            return res.send({error:"User already exist"});
        }
        let result=await data.save();
        result=result.toObject();
        delete result.password;
        console.log(result);
        res.send(result);
        
    }
    catch{
        res.send({error:"Internal server error in Signup"});
    }
})

app.post('/login', async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        let result=await User.findOne({email,password});
        if(result){
            result=result.toObject();
            delete result.password;
            return res.send(result);
        }
        else{
            return res.send({error:"User not exist"});
        }
    }
    catch{ 
        res.send({error:"Internal server error in Login"})
    }
})
const PORT=4500;
app.listen(4500);