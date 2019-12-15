import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Theatre} from "../model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../core/api.service";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-theatre',
  templateUrl: './edit-theatre.component.html',
  styleUrls: ['./edit-theatre.component.css']
})
export class EditTheatreComponent implements OnInit {

  theatre: Theatre;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private http:HttpClient) { }

  ngOnInit() {
    let theatre = window.localStorage.getItem("editTheatre");
    if(!theatre) {
      alert("Invalid action.")
      this.router.navigate(['list-theatre']);
      return;
    }
    this.editForm = this.formBuilder.group({
      theatreid: [''],
      theatrename: ['', Validators.required],
      movieName: ['', Validators.required],
      showTime: ['', Validators.required]
    });
	let theaterJson=JSON.parse(theatre);
	this.editForm.controls.theatreid.value=theaterJson.id;
	this.editForm.controls.theatrename.value=theaterJson.theaterName;
	this.editForm.controls.movieName.value=theaterJson.movieName;
	this.editForm.controls.showTime.value=theaterJson.showTime;
    
  }

  onSubmit() {
	  if(this.editForm.invalid)return;
	  let editRequest={
		  theaterId:this.editForm.controls.theatreid.value,
		  theaterName:this.editForm.controls.theatrename.value,
		  movieName:this.editForm.controls.movieName.value,
		  showTime:this.editForm.controls.showTime.value
	  }
     this.http.post('http://192.168.43.128:8080/api/updateMasterData',editRequest).subscribe(data => {
		this.router.navigate(['list-theatre']);
    })
  }
}
