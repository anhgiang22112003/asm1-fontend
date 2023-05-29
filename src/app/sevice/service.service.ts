import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { Iproduct } from '../interface/product';

@Injectable( {
  providedIn: 'root'
} )
export class ServiceService
{

  constructor ( private http: HttpClient ) { }
  getAll (): Observable<Iproduct[]>
  {
    return this.http.get<Iproduct[]>( "http://localhost:3000/project" )
  }
  get ( id: number ): Observable<Iproduct>
  {
    return this.http.get<Iproduct>( `http://localhost:3000/project/${ id }` )
  }
  xoa ( id: number ): Observable<Iproduct>
  {
    return this.http.delete<Iproduct>( `http://localhost:3000/project/${ id }` )
  }
  add ( body: Iproduct ): Observable<Iproduct>
  {
    return this.http.post<Iproduct>( "http://localhost:3000/project", body )
  }
  edit ( body: Iproduct ): Observable<Iproduct>
  {
    return this.http.put<Iproduct>( `http://localhost:3000/project/${ body.id }`, body )
  }
}
