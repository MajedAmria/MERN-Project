const {User}=require("../models/user.model");
const {Course}=require("../models/course.model");

// module.exports.createUser=(request, response)=>{
//     const {firstName, lastName, email, password, phoneNumber,
//         numberOfCourses, listOfCoursesTaken}=request.body;
//     User.create({
//         firstName, lastName, email, password, phoneNumber,
//         numberOfCourses, listOfCoursesTaken})
//     .then(user=>response.json(user))
//     .catch(err=>response.status(400).json(err));
// }


module.exports.register= (request, response) => {
    
    User.create(request.body)
        .then(user => {response.json({ msg: "success!", user: user });})
        .catch(err => response.json(err));
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