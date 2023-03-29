import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2NovoComponent } from './ex2-novo.component';

describe('Ex2NovoComponent', () => {
  let component: Ex2NovoComponent;
  let fixture: ComponentFixture<Ex2NovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex2NovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex2NovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
