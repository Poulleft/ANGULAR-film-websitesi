import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetayComponent } from './film-detay.component';

describe('FilmDetayComponent', () => {
  let component: FilmDetayComponent;
  let fixture: ComponentFixture<FilmDetayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmDetayComponent]
    });
    fixture = TestBed.createComponent(FilmDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
