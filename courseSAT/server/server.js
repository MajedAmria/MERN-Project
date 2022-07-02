const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/userCourse.routes')(app);
require('./config/mongoose.config');
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})