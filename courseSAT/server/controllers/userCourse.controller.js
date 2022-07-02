const {User}=require("../models/user.model");
const {Course}=require("../models/course.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { request } = require("express");


module.exports.register=(req, response) => {
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);
            response.cookie("usertoken", userToken, {
                    httpOnly: true})
                .json({ msg: "success!", user: {_id:user._id, firstName: user.firstName, lastName: user.lastName}});
        })
        .catch(err => response.json(err));
    }

module.exports.login=async(request, response)=>{
    const user = await User.findOne({ email: request.body.email });
    if(user === null) {
        console.log("user not found");
        return response.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(request.body.password, user.password);

    if(!correctPassword) {
        console.log("incorrect password");
        return response.sendStatus(400);
    }
    const payload = {
        id: user._id
        };
    // const secret = process.env.SECRET_KEY;
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);
    // add token to cookies 
    response.cookie("usertoken", userToken, {
            httpOnly: true})
        .json({ msg: "success!", user: {_id:user._id, firstName: user.firstName}});
}


module.exports.createCourse=(request, response)=>{
    const {title, startingDate, endDate, description, coursePrice,
        listOfStudents, instructor, imageUrl}=request.body;
    Course.create({
        title, startingDate, endDate, description, coursePrice,
        listOfStudents, instructor, imageUrl})
    .then(course=>response.json(course))
    .catch(err=>response.status(400).json(err));
}

module.exports.getAllCourses=(request, response)=>{
    Course.find({})
    .then(courses=>response.json(courses))
    .catch(err=>response.json(err))
}

module.exports.getUser=(request, response)=>{
    User.findOne({_id: request.params.id})
    .then(user=>response.json(user))
    .catch(err=>response.json(err))
}

module.exports.getCourse=(request, response)=>{
    Course.findOne({_id: request.params.id})
    .then(course=>response.json(course))
    .catch(err=>response.json(err))
}

module.exports.addStudentToCourse=async(request, response)=>{
    const thisCourse=await Course.findOne({_id: request.params.courseId});
    const thisUser=await User.findOne({_id: request.params.userId});
    thisCourse.listOfStudents=[...thisCourse.listOfStudents,thisUser._id];
    thisCourse.save();
    thisUser.listOfCoursesTaken=[...thisUser.listOfCoursesTaken,thisCourse._id];
    thisUser.numberOfCourses+=1;
    thisUser.save({ validateBeforeSave: false });
    response.json({thisUser, thisCourse});
}

module.exports.logout= (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}