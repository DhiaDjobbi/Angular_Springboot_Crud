import { Injectable } from '@angular/core';
import { Facture } from '../model/Facture';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  apiURL: string = 'http://localhost:8080/factures/api';
  factures: Facture[];

  constructor(private http: HttpClient) {
  }

  getFactures(): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.apiURL);
  }

  createFacture(prod: Facture): Observable<Facture> {
    return this.http.post<Facture>(this.apiURL, prod, httpOptions);
  }



  deleteFacture(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }



  findFacture(id: number): Observable<Facture> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Facture>(url);
  }


  updateFacture(fact: Facture): Observable<Facture> {
    return this.http.put<Facture>(this.apiURL, fact, httpOptions);
  }


}
