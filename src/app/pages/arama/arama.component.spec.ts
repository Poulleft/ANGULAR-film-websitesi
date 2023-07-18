import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AramaComponent } from './arama.component';

describe('AramaComponent', () => {
  let component: AramaComponent;
  let fixture: ComponentFixture<AramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AramaComponent]
    });
    fixture = TestBed.createComponent(AramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
