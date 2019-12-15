import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Theatre} from "../model/user.model";
import {ApiService} from "../core/api.service";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-theatre',
  templateUrl: './list-theatre.component.html',
  styleUrls: ['./list-theatre.component.css']
})
export class ListTheatreComponent implements OnInit {

  theatres: Theatre[];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
	  
	  this.getMasterData();
    
  }
  getMasterData(){
	  this.http.get('http://192.168.43.128:8080/api/getMasterData').subscribe(data => {
      // Read the result field from the JSON response.get response
      this.theatres=data;
    })
  }

  deleteTheatre(theatre: Theatre): void {
    this.http.delete('http://192.168.43.128:8080/api/delete/'+theatre.theaterId).subscribe(data => {
      // Read the result field from the JSON response.get response
      this.getMasterData();
    })
  };

  editTheatre(theatre: Theatre): void {
    window.localStorage.removeItem("editTheatre");
    window.localStorage.setItem("editTheatre", JSON.stringify(theatre));
    this.router.navigate(['edit-theatre']);
  };

  addTheatre(): void {
    this.router.navigate(['add-theatre']);
  };
}
