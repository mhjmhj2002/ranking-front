import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTemporadaComponent } from './temporada-view.component';

describe('ViewTemporadaComponent', () => {
  let component: ViewTemporadaComponent;
  let fixture: ComponentFixture<ViewTemporadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTemporadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTemporadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
