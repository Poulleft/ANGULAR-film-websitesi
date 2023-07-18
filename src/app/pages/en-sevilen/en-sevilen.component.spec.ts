import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnSevilenComponent } from './en-sevilen.component';

describe('EnSevilenComponent', () => {
  let component: EnSevilenComponent;
  let fixture: ComponentFixture<EnSevilenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnSevilenComponent]
    });
    fixture = TestBed.createComponent(EnSevilenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
