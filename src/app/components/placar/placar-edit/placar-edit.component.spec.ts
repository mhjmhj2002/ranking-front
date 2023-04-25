import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlacarComponent } from './placar-edit.component';

describe('EditPlacarComponent', () => {
  let component: EditPlacarComponent;
  let fixture: ComponentFixture<EditPlacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlacarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
