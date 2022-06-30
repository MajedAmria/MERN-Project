const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema= new mongoose.Schema({
    firstName:{type:String, required:[true, "User's First Name is Required"], minLength:[2, "User's First Name Should have at least 2 characters"]},
    lastName:{type:String, required:[true, "User's Last Name is Required"], minLength:[2, "User's Last Name Should have at least 2 characters"]},
    email:{type:String,unique:true, required:[true, "Email is required"], minLength:[8, "Email should have at least 8 characters"],
        validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
        }},
    password:{type:String, required:[true, "Please Enter a Password"], minLength:[3, "Password should have at least 12 characters"]},
    phoneNumber:{type:Number, required:[true, "Please enter your phone number"], min:[3, "Phone Number should be at least 10 digits"]},
    numberOfCourses:{type:Number, default: 0},
    listOfCoursesTaken:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
}, { timestamps: true });

UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

//if this method is commented out, addStudentToCourse works without any issue
// UserSchema.pre('validate', function(next) {
//     if (this.password !== this.confirmPassword) {
//         this.invalidate('confirmPassword', 'Password must match confirm password');
//         }
//         next();
//     });

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
        });
    });

module.exports.User=mongoose.model('User', UserSchema);