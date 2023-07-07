import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http:HttpClient) { }

  public obtenerDatos():Observable<any>{
    return this.http.get<any>('../assets/db.json')
  }
}
