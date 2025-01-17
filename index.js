//app create
const express = require("express");
const app = express();

require('dotenv').config()

//port find karna hai
const PORT = process.env.PORT || 3000;

//middleware add karna hai
app.use(express.json())
const fileupload = require('express-fileupload');
app.use(fileupload());

//db se connect krna hai
const db = require('./config/database');
db.connect();

//cloud se connect karna hai
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

//api route mount karna hai
const Upload = require('./routes/FileUpload');
app.use('/api/v1/upload',Upload);

//activate server
app.listen(PORT,()=>{
    console.log(`App listened at ${PORT}`);
})