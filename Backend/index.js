//w0FrJYvgA0sDPBFo

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const crypto =require('crypto')
const multer = require('multer')
const bcrypt = require('bcryptjs')
const {MONGOURI} = require('./keys')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('./keys')

//import mongoose.SchemaTypes.Url from "mongoose-type-url"

require('./user')
require('./detail')

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}, () => {
    console.log("DB connected")
})

const User = mongoose.model("User")

/*const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null,'./uploads')
    },
    filename:(req, file, callback) => {
        callback(null, file.upload_file);
    }
})*/

//const upload= multer({storage: storage});

app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            bcrypt.compare(password,user.password)
            .then(doMatch => {
                if(doMatch){
                    const token = jwt.sign({_id:user._id},JWT_SECRET)
                    // const {_id,name,email}=user
                //   res.json({token,user:{_id,name,email}})
                console.log(user._id)
                const see=user._id
                    console.log({token});
                    // let decoded = jwt_decode(token);
                    // console.log(decoded)
                    // console.log('ok')
                    // res.json({token})
                    return res.send({message: "Login Successfull", user: user,token:token,userid : user._id})
                }
                else {
                    return res.send({ message: "Invalid Email or Password"})
                }
            })    
        } else {
            return res.send({message: "Invalid Email or Password"})
        }
    })
}) 

app.post("/register",(req,res)=>{
    const {name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {

            bcrypt.hash(password,12)
            .then(hashedpassword => {
                const user = new User({
                    name,
                    email ,
                    password:hashedpassword,
                })
                user.save(err => {
                    if(err) {
                        res.send(err)
                    } else {
                        res.send( { message: "Successfully Registered, Please login now." })
                    }
                })
            })
           
        }
    })
    
})

// const path = require('path');
// const initRoutes = require(path.join(__dirname+"/routes"));
// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));
// initRoutes(app);

// const path = require('path');
// app.get("/upload",(req,res)=>{
//     res.sendFile(path.join(__dirname+'/index.html'))
// })

// app.post("/upload",(req,res)=>{
//     res.send('ok')
//     res.redirect('/upload')
// })

const requireLogin =require('./requireLogin')
const req = require('express/lib/request')
const ResumeInfo = mongoose.model("ResumeInfo")
const BasicInfo =  mongoose.model("BasicInfo")
const Education = mongoose.model("Education")
const WorkExperience = mongoose.model("WorkExperience")
const Skill =  mongoose.model("Skill")
const Language =  mongoose.model("Language")
const Project =  mongoose.model("Project")
const Achievement =  mongoose.model("Achievement")
const Certificates =  mongoose.model("Certificates")
const imageSchema =  mongoose.model("imageSchema")

app.post('/infodetail', (req, res)=>{
    const { formdata,fname, lname, linkedin, github, email,phone,title,address,
           college, classcollege, startDate, endDate , marks,
           companyName, certificateLink, location,points,
           skill, overview, link,
           language,
           description,} = req.body;
  
BasicInfo.findOne({email:email},(err, user) => {
    if(user){
    const basic= new BasicInfo({
        UserID: user._id,
        fname, 
        lname, 
        linkedin, 
        github, 
        email,
        phone,
        title,
        address,
        formdata
    });
    console.log("yes info")      
    basic.save(err => {
        if(err) {
            res.send(err)
        } else {
            res.send( { message: "saved" })
        }
    })
}
})
});


app.post('/edudetail', (req, res)=>{
    const { fname, lname, linkedin, github, email,phone,title,address,
           college, classcollege, startDate, endDate , marks,
           companyName, certificateLink, location,points,
           skill, overview, link,
           language,
           description,} = req.body;
  
Education.findOne({college:college},(err, user) => {
    if(user){
        const edu = new Education({
            userId: user._id,
            college,
            classcollege, 
            startDate, 
            endDate, 
            marks
        });
    console.log("yes edu")      
    edu.save(err => {
        if(err) {
            res.send(err)
        } else {
            res.send( { message: "saved" })
        }
    })
}
})
});

app.post('/workdetail', (req, res)=>{
    const { fname, lname, linkedin, github, email,phone,title,address,
           college, classcollege, startDate, endDate , marks,
           companyName, certificateLink, location,points,
           skill, overview, link,
           language,
           description,} = req.body;
WorkExperience.findOne({email:email},(err, user) => {
    if(user){
        const work = new WorkExperience({
            userId: user._id,
            title, 
            companyName, 
            certificateLink, 
            location, 
            startDate, 
            endDate,
            points
        })
    console.log("yes work")      
    work.save(err => {
        if(err) {
            res.send(err)
        } else {
            res.send( { message: "saved" })
        }
    })
}
})
});

    
app.post('/skilldetail', (req, res)=>{
    const { sectionTitle,fname, lname, linkedin, github, email,phone,title,address,
           college, classcollege, startDate, endDate , marks,
           companyName, certificateLink, location,points,
           skill, overview, link,
           language,
           description,} = req.body;

    Skill.findOne({email:email},(err, user) => {
       if(user){
    const skills = new Skill({
        userId: user._id,
        sectionTitle,
        skill,
    })
    console.log("yes skill") 
    skills.save(err => {
        if(err) {
            res.send(err)
        } else {
            res.send( { message: "saved" })
        }
    })
}
})
    });
    

app.post('/prodetail', (req, res)=>{
        const { fname, lname, linkedin, github, email,phone,title,address,
               college, classcollege, startDate, endDate , marks,
               companyName, certificateLink, location,points,
               skill, overview, link,
               language,
               description,} = req.body;
    
    Project.findOne({email:email},(err, user) => {
           if(user){
    const pro = new Project({
        userId: user._id,
        title,
        overview,
        link,
        github,
        points
    })
    console.log("yes project") 
    pro.save(err => {
        if(err) {
            res.send(err)
        } else {
            res.send( { message: "saved" })
        }
  
    })
}
})
    });
    
app.post('/langdetail', (req, res)=>{
        const { fname, lname, linkedin, github, email,phone,title,address,
               college, classcollege, startDate, endDate , marks,
               companyName, certificateLink, location,points,
               skill, overview, link,
               language,
               description,} = req.body;
    
    Language.findOne({email:email},(err, user) => {
           if(user){
    const languages = new Language({
        userId: user._id,
        language,
    })
    console.log("yes language") 
    languages.save(err => {
        if(err) {
            res.send(err)
        } else {
            res.send( { message: "saved" })
        }
    })
}
})
    });
   
app.post('/certidetail', (req, res)=>{
        const { fname, lname, linkedin, github, email,phone,title,address,
               college, classcollege, startDate, endDate , marks,
               companyName, certificateLink, location,points,
               skill, overview, link,
               language,
               description,} = req.body;
    
    Certificates.findOne({email:email},(err, user) => {
           if(user){
    const certificates = new Certificates({
        userId: user._id,
        certificateLink,
        description,
    })
    console.log("yes certificate") 
    certificates.save(err => {
        if(err) {
            res.send(err)
        } else {
            res.send( { message: "saved" })
        }
    })
}
})
    });

app.post('/achievedetail', (req, res)=>{
        const { fname, lname, linkedin, github, email,phone,title,address,
               college, classcollege, startDate, endDate , marks,
               companyName, certificateLink, location,points,
               skill, overview, link,
               language,
               description,} = req.body;
    
    Achievement.findOne({email:email},(err, user) => {
           if(user){
    const achievements = new Achievement({
        userId: user._id,
        points,
    })
    console.log("yes achieve") 
    achievements.save(err => {
        if(err) {
            res.send(err)
        } else {
            res.send( { message: "saved" })
        }

    })
}
})
    });

  


// app.post('/details', (req, res)=>{
//     console.log("1")
//     const { password,fname, lname, linkedin, github, email,phone,title,address,
//            college, classcollege, startDate, endDate , marks,
//            companyName, certificateLink, location,points,
//            skill, overview, link,
//            language,
//            description,} = req.body;
         
         
//   ResumeInfo.findOne({password:password}, (err, user) => {
//             if(user){  
//                 console.log("yes")      
//                 console.log(email)

//     const info =new ResumeInfo({
//        UserID: user._id,
//        Contact_Info: {
//            password,
//         UserID: user._id,
//         fname, 
//         lname, 
//         linkedin, 
//         github, 
//         email,
//         phone,
//         title,
//         address,
//         },
//         Education: {
//             password,
//             UserID: req.user,
//             college,
//             classcollege, 
//             startDate, 
//             endDate, 
//             marks
//         },
//         Work_Experience:{  
//             password,
//             title,
//             companyName, 
//             certificateLink, 
//             location, 
//             startDate, 
//             endDate,
//             points
//         },           
//         Skills: {skill},
//         Projects:{
//             title,
//             overview,
//             link,
//             github,
//             points
//         },
//         Achievements:{
//             points,
//         },
//         Certificates:{
//             certificateLink,
//             description,
//         },
//         Languages: {  language,},
//         // Other: {profileImg}
//     }); 
// //   Users.findOneAndUpdate({})
//     try {
//        info.save()
//         res.redirect('/');
//     } catch (err) {
//         console.log(err)
//         res.json({ message: err });
//     }
// }
// else{
//      console.log(err)
//     console.log("no")
// }
// })
//      })
    
 

app.get('/alldetail',(req,res) => {
    BasicInfo.find()
    .populate("User_Id","_id name")
    .then(posts =>{
        res.json({posts})
    })
    .catch(err => {
        console.log(err)
    })
})
// const mailer =(email,otp) =>{
// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//     service:'gmail',
//     port: 9002,
//     secure: false,
//     auth:{
//         user: 'buildmyresume1001@gmail.com',
//         password: 'Reportbangai1001'
//     }
// });

// var mailOptions = {
//     from: 'buildmyresume1001@gmail.com',
//     to:user.email,
//     subject:"Password Reset",
//     html:`
//     <p>You are requested for password reset</p>
//     <h5>Click on this <a href="https://localhost:3000/reset/${token}">link</a> to resent password</h5>
//     `
// };

// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         console.log(error);
//     }else{
//         console.log('Email sent: '+ info.response);
//     }
// });
// }
// app.post('/reset-password',(eq,res) => {
//     crypto.randomBytes(32,(err,buffer) => {
//         if(err){
//             console.log(err)
//         }
//         const token = buffer.toString("hex")
//         User.findOne({email:re.body.email})
//         .then(user => {
//             if(!user){
//             console.log("User dosen't exist with that email!")
//             return res.status(422).json({error:"User dosen't exist with that email!"})
//             }
//             user.resetToken = token
//             user.expireToken = Date.now() + 3600000
//             user.save().then((result) => {
//                 mailer()
//                 res.json({message:"check your email"})
//                 console.log("check your email")
//             })
//         })
//     })
// })

// var corsOptions = {
//     origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));

const initRoutes = require("./routes");
initRoutes(app);

app.listen(9002,() => {
    console.log("BE started at port 8080")
})