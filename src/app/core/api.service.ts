import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Theatre} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/';


  getTheatres() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getTheatreById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createTheatre(theatre: Theatre): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, theatre);
  }

  updateTheatre(theatre: Theatre): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + theatre.id, theatre);
  }

  deleteTheatre(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
