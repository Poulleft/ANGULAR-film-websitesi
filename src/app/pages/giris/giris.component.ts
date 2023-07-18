import { HttpClient } from '@angular/common/http';
import { Component  , OnInit} from '@angular/core';
import { FormBuilder  , FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})
export class GirisComponent implements OnInit {

  girisForm:FormGroup

  constructor(private formBuilder : FormBuilder , private http : HttpClient , private route : Router){}

  ngOnInit(): void {
      this.girisForm = this.formBuilder.group({
        isim:[''],
        email:[''],
        sifre:[''],
      })
  }


  girisYap(){

    this.http.get<any>("http://localhost:3000/kayit").subscribe((result)=>{
      const user = result.find((a:any)=>{
        return a.email === this.girisForm.value.email && a.sifre===this.girisForm.value.sifre && a.isim === this.girisForm.value.isim
      })

      if(user){
        alert("Giriş Başarılı");
        this.girisForm.reset();
        this.route.navigate(['ensevilen']);
      }
      else{
        alert("Kullanıcı Yok");
      }
    }, err=>{
        alert("Hata Oluştu");
    }
    )
  }

}
