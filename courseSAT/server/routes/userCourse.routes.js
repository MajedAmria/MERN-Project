const UserCourseController=require("../controllers/userCourse.controller");

module.exports=function(app){
    app.post('/api/login', UserCourseController.login);
    app.post('/api/register', UserCourseController.register);
    app.post('/api/course', UserCourseController.createCourse);
    // app.post('/api/course',{authenticate}, UserCourseController.createCourse);
    app.get('/api/courses', UserCourseController.getAllCourses);
    app.get('/api/users/:id', UserCourseController.getUser);
    app.get('/api/courses/:id', UserCourseController.getCourse);
    app.put('/api/:courseId/:userId',UserCourseController.addStudentToCourse);
}


// const Users = require('../controllers/user.controller');
// const { authenticate } = require('../config/jwt.config');
// module.exports = app => {
//   app.post("/api/register", Users.register);
//   app.post("/api/login", Users.login);
//   // this route now has to be authenticated
//   app.get("/api/users", authenticate, Users.getAll);
// } 