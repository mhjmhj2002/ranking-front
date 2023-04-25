import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltiListComponent } from './penalti-list.component';

describe('PenaltiListComponent', () => {
  let component: PenaltiListComponent;
  let fixture: ComponentFixture<PenaltiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenaltiListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
