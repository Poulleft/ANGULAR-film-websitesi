import { Component , OnInit } from '@angular/core';
import { FilmApiService } from 'src/app/service/film-api.service';

@Component({
  selector: 'app-en-sevilen',
  templateUrl: './en-sevilen.component.html',
  styleUrls: ['./en-sevilen.component.scss']
})
export class EnSevilenComponent implements OnInit {

  bannerSonuc:any=[];
  enIyiFilmlerS:any=[];

  constructor(private servis:FilmApiService){}

  ngOnInit(): void {
    this.bannerData();
      this.enSevilen();
  }

  bannerData() {
    this.servis.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerSonuc = result.results;
    });
  }

  enSevilen(){
    this.servis.enIyiFilmler().subscribe((result)=>{
  console.log(result , 'sevilenFilmler#');
  this.enIyiFilmlerS=result.results;
  
    });
  }


}
