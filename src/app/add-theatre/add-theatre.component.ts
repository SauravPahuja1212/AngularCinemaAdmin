import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-theatre',
  templateUrl: './add-theatre.component.html',
  styleUrls: ['./add-theatre.component.css']
})
export class AddTheatreComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService,private http: HttpClient) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      theatreid: [],
      theatrename: ['', Validators.required]
    });
  }

  onSubmit() {
	  if(!this.addForm.controls.theatrename.value) return
	   this.http.post('http://192.168.43.128:8080/api/add',{theaterName:this.addForm.controls.theatrename.value}).subscribe(data => {
      // Read the result field from the JSON response.get response
     this.router.navigate(['list-theatre']);
    })
    
  }
}
