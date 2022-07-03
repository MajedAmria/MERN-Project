const UserCourseController=require("../controllers/userCourse.controller");
const { authenticate } = require('../config/jwt.config');
module.exports=(app)=>{
    app.post('/api/login', UserCourseController.login);
    app.post('/api/register', UserCourseController.register);
    // app.post('/api/course', UserCourseController.createCourse);
    app.post('/api/course', authenticate, UserCourseController.createCourse);
    app.get('/api/courses', UserCourseController.getAllCourses);
    app.get('/api/users/:id', UserCourseController.getUser);
    app.get('/api/courses/:id', UserCourseController.getCourse);
    app.put('/api/:courseId/:userId', authenticate,UserCourseController.addStudentToCourse);
    // app.put('/api/:courseId/:userId', UserCourseController.addStudentToCourse);
    app.get('/api/listcourses/:courseId',UserCourseController.getStudentsInCourse);
    app.get('/api/logout/', UserCourseController.logout);
}