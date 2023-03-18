import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlacarComponent } from './placar-view.component';

describe('ViewPlacarComponent', () => {
  let component: ViewPlacarComponent;
  let fixture: ComponentFixture<ViewPlacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlacarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
