const mongoose = require('mongoose');
const CourseSchema=new mongoose.Schema({
    title:{type:String,unique: true, required:[true, "User's First Name is Required"],
        minLength:[2, "Course's Title Should have at least 2 characters"]},
    startingDate:{type:Date, required:[true, "Please determine the satring date of the course"],
        min:[Date.now, "please enter a valid date"]},
    endDate:{type:Date, required:[true, "Please determine the end date of the course"],
    min:[Date.now, "please enter a valid end date"]},
    description:{type:String},
    coursePrice:{type:Number},
    listOfStudents:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    instructor:{type:String},
    imageUrl:{type:String},
},{ timestamps: true });

module.exports.Course=mongoose.model('Course', CourseSchema);