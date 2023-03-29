import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1NovoComponent } from './ex1-novo.component';

describe('Ex1NovoComponent', () => {
  let component: Ex1NovoComponent;
  let fixture: ComponentFixture<Ex1NovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1NovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex1NovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
