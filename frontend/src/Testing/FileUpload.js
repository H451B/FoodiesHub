import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        let serverRoot="http://localhost:5002/fileupload/";
        this.state={
            inputData:{},
            formData:new FormData(),
            mediaLink:serverRoot,
            responseData:null,
            mediaSrc:null,
            uploadedMedia:null
        }
        this.getData = this.getData.bind(this);
        this.getFile = this.getFile.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    setMediaLink(filename){
       
            this.setState({uploadedMedia:this.state.mediaLink.concat(filename)});
    }

    getData(e){
        this.setState({inputData:{[e.target.name]:e.target.value}});
       
    }
    getFile(e){
        this.state.formData.append(e.target.name,e.target.files[0]);

        var reader = new FileReader();
        var url = reader.readAsDataURL(e.target.files[0]);
        reader.onload=(e)=>{
            
            this.setState({mediaSrc: reader.result});
        }
    }
    sendData(e){
        e.preventDefault();
        // var objKeys = Object.keys(this.state.inputData);
        // var objValues = Object.values(this.state.inputData);
        // console.log(objKeys,objValues);
        Object.entries(this.state.inputData).forEach(([key,value])=>{
            // console.log(key,value);
            this.state.formData.append(key,value);
        })

        axios.post('http://localhost:5002/addfile',this.state.formData)
        .then(
            (res)=>{
                // console.log(res);
                this.setState({responseData:res.data});
                console.log(this.state.responseData);
                this.setMediaLink(this.state.responseData.name);
            }
        ).catch((err)=>{
            console.log("Something Wrong!\n",err);
        });


    }
    
    render() {
        return (
            <div className="container  ">
                <h2 className="display-3 text-center">File Upload</h2>
                <div className="col-md-6 row justify-content-center">
                <form className="form" encType="multipart/form-data" >
                    <div >
                        <label>Name </label>
                        <input type="text" name="name" className="form-control" onChange={this.getData}  />                        
                    </div>
                    
                    <div>
                        <div>
                        <span>Picture</span>
                        <div className="container">
                            
                        <img className="img-fluid" alt={this.state.mediaSrc} src={this.state.mediaSrc}/>
                        </div>
                        <input type="file" name="picture" className="form-control" onChange={this.getFile} />

                        {this.state.responseData?( <div className="container">
                            
                            <img className="img-fluid" alt={this.state.uploadedMedia} src={this.state.uploadedMedia}/>
                            </div>):''}
                       
                        </div>                                                
                    </div>

                    <div className="mt-2 mb-2">
                        <button type="submit" className="btn btn-dark" onClick={this.sendData} >Send</button>
                    </div>


                    
                </form>
                </div>
                
            </div>
        );
    }
}

export default FileUpload;