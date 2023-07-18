import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { AramaComponent } from './pages/arama/arama.component';
import { FilmDetayComponent } from './pages/film-detay/film-detay.component';
import { EnSevilenComponent } from './pages/en-sevilen/en-sevilen.component';
import { KategoriComponent } from './pages/kategori/kategori.component';
import { GirisComponent } from './pages/giris/giris.component';
import { KayitComponent } from './pages/kayit/kayit.component';


const routes: Routes = [
  {path:'' , component : AnasayfaComponent},
  {path:'arama' , component : AramaComponent},
  {path:'film/:id' , component : FilmDetayComponent},
  {path:'ensevilen' , component : EnSevilenComponent},
  {path:'kategori' , component : KategoriComponent},
  {path:'giris' , component : GirisComponent},
  {path:'kayit' , component : KayitComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
