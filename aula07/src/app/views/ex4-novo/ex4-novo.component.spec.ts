import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4NovoComponent } from './ex4-novo.component';

describe('Ex4NovoComponent', () => {
  let component: Ex4NovoComponent;
  let fixture: ComponentFixture<Ex4NovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex4NovoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex4NovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
