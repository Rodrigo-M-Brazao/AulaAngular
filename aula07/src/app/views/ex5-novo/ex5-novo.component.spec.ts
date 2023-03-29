import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex5NovoComponent } from './ex5-novo.component';

describe('Ex5NovoComponent', () => {
  let component: Ex5NovoComponent;
  let fixture: ComponentFixture<Ex5NovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex5NovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex5NovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
