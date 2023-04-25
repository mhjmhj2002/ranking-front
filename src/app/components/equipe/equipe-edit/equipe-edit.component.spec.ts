import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquipeComponent } from './equipe-edit.component';

describe('EditEquipeComponent', () => {
  let component: EditEquipeComponent;
  let fixture: ComponentFixture<EditEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
