import { Component , OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { FilmApiService } from 'src/app/service/film-api.service';

@Component({
  selector: 'app-film-detay',
  templateUrl: './film-detay.component.html',
  styleUrls: ['./film-detay.component.scss']
})
export class FilmDetayComponent implements OnInit {

  filmDetayS:any;
  filmVideoS:any;
  filmCastS:any;

  constructor(private servis: FilmApiService , private route:ActivatedRoute ){}

  ngOnInit(): void {
    let paramId = this.route.snapshot.paramMap.get('id');
    console.log(paramId , 'paramId#');

      this.getFilm(paramId);
      this.getVideo(paramId);
      this.getCast(paramId);
      
  }

  getFilm(id:any){
    this.servis.filmDetay(id).subscribe((result)=>{

      console.log(result , 'filmDetay#');
      
      this.filmDetayS = result;
    });
  }

  getVideo(id:any){
    this.servis.filmVideo(id).subscribe((result)=>{
      console.log(result);

      result.results.forEach(element => {
        if(element.type=="Trailer"){
          this.filmVideoS=element.key;
        }
      });
    });
  }


  getCast(id:any){
    this.servis.filmCast(id).subscribe((result)=>{
      console.log(result , 'filmCast#');

      this.filmCastS=result.cast;
    });
  }

}
