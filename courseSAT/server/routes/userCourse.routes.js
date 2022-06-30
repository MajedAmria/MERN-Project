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