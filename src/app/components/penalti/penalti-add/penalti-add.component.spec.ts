import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPenaltiComponent } from './penalti-add.component';

describe('AddPenaltiComponent', () => {
  let component: AddPenaltiComponent;
  let fixture: ComponentFixture<AddPenaltiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPenaltiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPenaltiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
