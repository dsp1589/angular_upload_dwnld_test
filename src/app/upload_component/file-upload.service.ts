import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

export class FileUploadService {

  constructor(private http: HttpClient) { }

    postFile(f : File){
        //const endpoint = 'ftp://speedtest.tele2.net/upload/'; cross scripting wont work
        const endpoint = 'http://localhost:3030/upload';
        const formData: FormData = new FormData();
        formData.append('fileKey', f, f.name);
        // formData.append('name', 'dsp');
        return this.http.post(endpoint,formData);
    }
}