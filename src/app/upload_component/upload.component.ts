import { Component,ElementRef, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileUploadService} from './file-upload.service';
import { HttpClient } from '@angular/common/http';  

@Component({
    selector:'upload-image',
    template:`<form (submit)="onSubmit($event)">
    <label for="myfile">
    Custom Upload
    <input type = "file" file-model = "myFile" id="myfile" (change)="onFileChange($event.target.files)" #fileInput/>
</label>

         <button type="submit">upload me</button></form><a href="" id="download-file" #downloadAnchor><button>Download!</button></a>`,
           styles: ['label { border: 1px solid #ccc;display: inline-block;padding: 6px 12px;cursor: pointer; }\
           input[type="file"] {display: none;} a#download-file{display:none;}']
})

export class UploadComponent {

@ViewChild('fileInput') fileInput: ElementRef;
@ViewChild('downloadAnchor') downloadAnchor: ElementRef;
fileToUpload: File = null;

constructor( private http: HttpClient ) { //dependency injection, creating an instance of HttpClient called http

  }


onFileChange(files: FileList){
    console.log('filed');
    this.fileToUpload = files.item(0);
}

onSubmit(event){
   event.preventDefault();
   if(this.fileToUpload){

       const service = new FileUploadService(this.http);
       service.postFile(this.fileToUpload).subscribe(data => {
            console.log(data);
            if(data['url']){
       document.getElementById('download-file').style.cssText = 'display:block;';
       document.getElementById('download-file').setAttribute('href',data['url']);
            }
        });
    

   }else{
       alert('Please select the file to upload');
   }
}

}
