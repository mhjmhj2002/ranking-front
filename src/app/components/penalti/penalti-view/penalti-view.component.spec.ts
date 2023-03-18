import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPenaltiComponent } from './penalti-view.component';

describe('ViewPenaltiComponent', () => {
  let component: ViewPenaltiComponent;
  let fixture: ComponentFixture<ViewPenaltiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPenaltiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPenaltiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
