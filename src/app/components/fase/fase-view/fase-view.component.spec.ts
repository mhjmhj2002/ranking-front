import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFaseComponent } from './fase-view.component';

describe('ViewFaseComponent', () => {
  let component: ViewFaseComponent;
  let fixture: ComponentFixture<ViewFaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
