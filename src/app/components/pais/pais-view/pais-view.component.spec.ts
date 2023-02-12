import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaisComponent } from './pais-view.component';

describe('ViewPaisComponent', () => {
  let component: ViewPaisComponent;
  let fixture: ComponentFixture<ViewPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
