import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Defect } from '../models/defect.interface';

@Injectable({
  providedIn: 'root'
})
export class DefectService {

  private apiRoot = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  getDefect() {
    return this.http.get(this.apiRoot.concat('defect/'));
  }

  postDefect(defect: Defect) {
    return this.http.post(this.apiRoot.concat('defect/'), defect);
  }
}
