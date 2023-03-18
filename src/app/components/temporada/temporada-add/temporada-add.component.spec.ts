import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTemporadaComponent } from './temporada-add.component';

describe('AddTemporadaComponent', () => {
  let component: AddTemporadaComponent;
  let fixture: ComponentFixture<AddTemporadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTemporadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTemporadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
