import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL} from "../app.injection-tokens";
import {Observable} from "rxjs";
import {CategoryDTO} from "../DTO/CategoryDTO";

@Injectable({
  providedIn: 'root'
})

export class dtoService{
  constructor(private http: HttpClient, @Inject(AUTH_API_URL) private apiUrl: string) {
  }

  getCategoryname(IdCategory: string): Observable<CategoryDTO>{
    return this.http.get<CategoryDTO>(`${this.apiUrl}DTOAction/GetCategory`);
  }
}
