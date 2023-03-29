import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3NovoComponent } from './ex3-novo.component';

describe('Ex3NovoComponent', () => {
  let component: Ex3NovoComponent;
  let fixture: ComponentFixture<Ex3NovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex3NovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex3NovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
