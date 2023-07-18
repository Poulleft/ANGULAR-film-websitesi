import { HttpClient } from '@angular/common/http';
import { Component  , OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kayit',
  templateUrl: './kayit.component.html',
  styleUrls: ['./kayit.component.scss']
})
export class KayitComponent implements OnInit {

  constructor(private formBuilder : FormBuilder , private http : HttpClient , private route : Router){}


  kayitForm:FormGroup

  ngOnInit(): void {
      this.kayitForm = this.formBuilder.group({
        isim:[''],
        email:[''],
        sifre:[''],
      })
  }


  kayitYap(){
  
    this.http.post<any>("http://localhost:3000/kayit" , this.kayitForm.value).subscribe((result)=>{
      alert("kayıt Başarılı");
      this.kayitForm.reset();
      this.route.navigate(['giris']);
    } , err=> {
      alert("Hata Oluştu");
    }
    )
  }

}
