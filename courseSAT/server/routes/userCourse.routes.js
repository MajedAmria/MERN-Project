const UserCourseController=require("../controllers/userCourse.controller");

module.exports=function(app){
    // app.post('/api/user', UserCourseController.createUser);
    app.post('/api/user', UserCourseController.register);
    app.post('/api/course', UserCourseController.createCourse);
    app.get('/api/courses', UserCourseController.getAllCourses);
    app.get('/api/users/:id', UserCourseController.getUser);
    app.get('/api/courses/:id', UserCourseController.getCourse);
}