import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KayitComponent } from './kayit.component';

describe('KayitComponent', () => {
  let component: KayitComponent;
  let fixture: ComponentFixture<KayitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KayitComponent]
    });
    fixture = TestBed.createComponent(KayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
