const {User}=require("../models/user.model");
const {Course}=require("../models/course.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


module.exports.register= (request, response) => {
    
    User.create(request.body)
        .then(user => {response.json({ msg: "success!", user: user });
        })
        .catch(err => response.status(400).json(err));
    }

module.exports.login=async(request, response)=>{
    // check if we have the email in our database
    const user = await User.findOne({ email: request.body.email });
    console.log(request.body.password)
    // check if the password matches with the one in db.
    if(user === null) {
        // email not found in users collection
        return response.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(request.body.password, user.password);

    if(!correctPassword) {
        // password wasn't a match!
        return response.sendStatus(400);
    }
    // define payload
    const payload = {
        id: user._id
        };
    // generate token
    // const userToken = 
    const secret = process.env.SECRET_KEY;
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);
    // add token to cookies 
           //res.cooki('token', userToken)
    response.cookie("usertoken", userToken, secret, {
            httpOnly: true})
        .json({ msg: "success!" });
}


module.exports.createCourse=(request, response)=>{
    const {title, startingDate, endDate, description, coursePrice,
        listOfStudents, instructor}=request.body;
    Course.create({
        title, startingDate, endDate, description, coursePrice,
        listOfStudents, instructor})
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