import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFaseComponent } from './fase-edit.component';

describe('EditFaseComponent', () => {
  let component: EditFaseComponent;
  let fixture: ComponentFixture<EditFaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
