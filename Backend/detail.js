const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

function dateValidator (value) {
  if(value == '')
  return;
  return value.startDate <= value.endDate;
}

const infoSchema = new mongoose.Schema({
    userId: {
      type: ObjectId,
      ref: "User"
    },
    fname: String,
    lname: String,
    linkedin: 
        {
          type: String,
          required: false,
          validate: {
            validator: function(value) {
              if(value == '')
              return;
              const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
              const urlRegExp = new RegExp(urlPattern);
              return value.match(urlRegExp);
            },
            message: props => `${props.value} is not a valid URL`
          }
        }
      ,
    github: 
            {
              type: String,
              validate: {
                validator: function(value) {
                  if(value == '')
                  return;
                  const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
                  const urlRegExp = new RegExp(urlPattern);
                  return value.match(urlRegExp);
                },
                message: props => `${props.value} is not a valid URL`
              }
            }
          ,
    email: String,
    phone: {
      type: String,
      match: /^\+(?:[0-9]●?){6,14}[0-9]$/,
    },
    title:String,
    address:String,
    profileImg: String,
},
{
  timestamps: true
})


mongoose.model("BasicInfo",infoSchema);

const educationSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: "User"
  },
   college: String,
   classCollege: String,
   startDate: Date,
   endDate: {
    type:Date,
    // validate: [dateValidator, 'Start Date must be less than End Date']
  },
   marks: String,
})

mongoose.model("Education",educationSchema);

const wrkExpSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: "User"
  },
    title: String,
    companyName: String,
    //certificatelink: mongoose.SchemaTypes.Url,
    certificatelink: 
        {
          type: String,
          validate: {
            validator: function(value) {
              if(value == '')
              return;
              const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
              const urlRegExp = new RegExp(urlPattern);
              return value.match(urlRegExp);
            },
            message: props => `${props.value} is not a valid URL`
          }
        }
      ,
    location: String,
    startDate: Date,
    endDate: {
      type:Date,
      validate: [dateValidator, 'Start Date must be less than End Date']
    },
    points: Array

})


mongoose.model("WorkExperience",wrkExpSchema);


const skillSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: "User"
  },
  SectionTitle: String,
  skill: [{type: String}],
})

mongoose.model("Skill",skillSchema);

const langSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: "User"
  },
    language: String,
})

mongoose.model("Language",langSchema);

const projectSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: "User"
  },
    title: String,
    overview: String,
    link:
        {
          type: String,
          validate: {
            validator: function(value) {
              if(value == '')
              return;
              const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
              const urlRegExp = new RegExp(urlPattern);
              return value.match(urlRegExp);
            },
            message: props => `${props.value} is not a valid URL`
          }
        }
      ,
    github:[
        {
          type: String,
          validate: {
            validator: function(value) {
              if(value == '')
              return;
              const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
              const urlRegExp = new RegExp(urlPattern);
              return value.match(urlRegExp);
            },
            message: props => `${props.value} is not a valid URL`
          }
        }
      ],
    points: Array,
})

mongoose.model("Project",projectSchema);

const achieveSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref:"User"
  },
    achievements: Array,
})

mongoose.model("Achievement",achieveSchema);

const certificateSchema = new mongoose.Schema({
  userId:{
    type: ObjectId,
    ref: "User"
  },
    certificatelink:
        {
          type: String,
          validate: {
            validator: function(value) {
              const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
              const urlRegExp = new RegExp(urlPattern);
              return value.match(urlRegExp);
            },
            message: props => `${props.value} is not a valid URL`
          }
        }
      ,
    description: String,
})

mongoose.model("Certificates",certificateSchema);

const imageSchema = new mongoose.Schema({
  userId:{
    type: ObjectId,
    ref: "User"
  },
Other: {
  profileImg: String,
}
})
mongoose.model("imageSchema",imageSchema);

const detailSchema = new mongoose.Schema({
    Contact_Info: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BasicInfo"
      }]
    ,
    Education: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Education"
      }
    ],
    // ,educationSchema],
    // Work_Experience: [wrkExpSchema],
    // Skills: [skillSchema],
    // Projects: [projectSchema],
    // Achievements: achieveSchema,
    // Certificates: [certificateSchema],
    // Languages: [langSchema],
    // Profile_img: String
})


mongoose.model("ResumeInfo",detailSchema);
