import { Component , HostListener} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'film-sitesi';
navbar:any;

kategori:any;



  @HostListener('document:scroll') scrollocer(){
    console.log(document.body.scrollTop,'scrolllenght#');
    if(document.body.scrollTop>0 || document.documentElement.scrollTop>0){
        this.navbar={
          backgroundColor:"#000000"
        }
    }else{
      this.navbar={
      }
    }
  }

  

}
