const File = require('../models/File');

//localfieldupload -> handler function
exports.localFileUpload = async(req,res) => {
    try{
        //fetch file from request
        const file = req.files.file;
        console.log("File AAgyi jii->",file);

        //create path where file to be stored on server
        let path = __dirname+"/files/"+Date.now()+`.${file.name.split('.')[1]}`;
        console.log('path->',path);

        //add path to move function
        file.mv(path, (err) =>{
            console.log(err);
        });

        //create a successful response
        res.json({
            sucess:true,
            message:"Local File Upload succesfully",
        });
    }
    catch(err){
        console.log(err);
    }
}