import { Component , OnInit } from '@angular/core';
import { FilmApiService } from 'src/app/service/film-api.service';


@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.scss']
})
export class AnasayfaComponent implements OnInit{


constructor(private servis:FilmApiService){}

bannerSonuc:any=[];
gununFilmleriSonuc:any=[];

ngOnInit(): void {
    this.bannerData();
    this.gününFilmleriData();
}

bannerData() {
  this.servis.bannerApiData().subscribe((result) => {
    console.log(result, 'bannerresult#');
    this.bannerSonuc = result.results;
  });
}


gününFilmleriData(){
  this.servis.gününFilmleriApiData().subscribe((result)=>{
console.log(result , 'gununFilmleri#');
this.gununFilmleriSonuc=result.results;

  });
}

}

