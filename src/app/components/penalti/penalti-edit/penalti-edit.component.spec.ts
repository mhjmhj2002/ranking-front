import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPenaltiComponent } from './penalti-edit.component';

describe('EditPenaltiComponent', () => {
  let component: EditPenaltiComponent;
  let fixture: ComponentFixture<EditPenaltiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPenaltiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPenaltiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
