import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class FilmApiService {

  constructor(private http:HttpClient) { }

baseUrl="https://api.themoviedb.org/3";
apiKey="73518c1c954c4e8784d7c976bc624acb";


bannerApiData():Observable<any>{
  return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
}


gününFilmleriApiData():Observable<any>{

  return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);

}

filmArama(data:any):Observable<any>{

  console.log(data, 'film#');
  return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.filmİsmi}`);

}


filmDetay(data:any):Observable<any>{
  console.log(data , 'filmDetay#');
  

  return this.http.get(`${this.baseUrl}/movie/${data}?api_key=${this.apiKey}`);

}


filmVideo(data:any):Observable<any>{

  return this.http.get(`${this.baseUrl}/movie/${data}/videos?api_key=${this.apiKey}`);

}

filmCast(data:any):Observable<any>{

  return this.http.get(`${this.baseUrl}/movie/${data}/credits?api_key=${this.apiKey}`);

}

enIyiFilmler():Observable<any>{

  return this.http.get(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}`);

}


aksiyonFilmi(): Observable<any> {

  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&`);

}


savasFilmi(): Observable<any>{

  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=10752`);

}


korkuFilmi(): Observable<any>{

  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=27`);
}

romantikFilmi(): Observable<any>{

  return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=10749`);
}



}
