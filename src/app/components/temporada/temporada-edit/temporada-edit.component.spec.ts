import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTemporadaComponent } from './temporada-edit.component';

describe('EditTemporadaComponent', () => {
  let component: EditTemporadaComponent;
  let fixture: ComponentFixture<EditTemporadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTemporadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTemporadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
