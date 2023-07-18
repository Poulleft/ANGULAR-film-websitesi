import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { AramaComponent } from './pages/arama/arama.component';
import { FilmDetayComponent } from './pages/film-detay/film-detay.component';
import { FilmApiService } from './service/film-api.service';
import {ReactiveFormsModule} from '@angular/forms';
import { EnSevilenComponent } from './pages/en-sevilen/en-sevilen.component';
import { KategoriComponent } from './pages/kategori/kategori.component';
import { GirisComponent } from './pages/giris/giris.component';
import { KayitComponent } from './pages/kayit/kayit.component';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    AramaComponent,
    FilmDetayComponent,
    EnSevilenComponent,
    KategoriComponent,
    GirisComponent,
    KayitComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [FilmApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
