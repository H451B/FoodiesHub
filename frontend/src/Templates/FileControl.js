import axios from "axios";
class FileControl{
    constructor(){
        this.serverRoot="http://localhost:5002/fileupload/";
        this.reponseData=null;

    }
    getFile(filename){
        return this.serverRoot.concat(filename);
    }

    sendFile(formdata){

        axios.post('http://localhost:5002/addfile',formdata)
        .then(
            (res)=>{
                // console.log(res);
                this.reponseData=res.data;
            }
        ).catch((err)=>{
            console.log("Something Wrong!\n",err);
        });

        return this.reponseData.name;

    }
}

export default FileControl;