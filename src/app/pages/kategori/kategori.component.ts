import { Component  , OnInit} from '@angular/core';
import { FilmApiService } from 'src/app/service/film-api.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss']
})
export class KategoriComponent implements OnInit {

  kat = {
    id: 1,
    poster_path: 'path_to_image.jpg'
  };

  aksiyonFilmi:any=[];
  savasFilmi:any=[];
  korkuFilmi:any=[];
  romantikFilmi:any=[];


  constructor(private servis:FilmApiService){}

  ngOnInit(): void {
    this.KorkuFilm();
    this.aksiyonFilm();
    this.savasFilm();
    this.romantikFilm();
      
  }



  aksiyonFilm() {
    this.servis.aksiyonFilmi().subscribe((result) => {
      this.aksiyonFilmi = result.results;
    });
  }

  savasFilm() {
    this.servis.savasFilmi().subscribe((result) => {
      this.savasFilmi = result.results;
    });
  }

  KorkuFilm() {
    this.servis.korkuFilmi().subscribe((result) => {
      this.korkuFilmi = result.results;
    });
  }

  romantikFilm() {
    this.servis.romantikFilmi().subscribe((result) => {
      this.romantikFilmi = result.results;
    });
  }

}
