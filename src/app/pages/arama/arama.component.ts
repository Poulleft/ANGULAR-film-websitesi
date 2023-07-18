import { Component , OnInit } from '@angular/core';
import {FormControl , FormGroup} from '@angular/forms';
import { FilmApiService } from 'src/app/service/film-api.service';


@Component({
  selector: 'app-arama',
  templateUrl: './arama.component.html',
  styleUrls: ['./arama.component.scss']
})
export class AramaComponent implements OnInit {
  constructor(private  servis:FilmApiService ){

  }

  ngOnInit(): void {
      
  }

  aramaSonucu:any;

  aramaFormu=new FormGroup({
    'filmİsmi':new FormControl(null)
  });

  submitForm(){
    console.log(this.aramaFormu.value,'searchform#');
    this.servis.filmArama(this.aramaFormu.value).subscribe((result)=>{
      console.log(result,`filmAra##`);
      this.aramaSonucu=result.results;
    });
  }


}
