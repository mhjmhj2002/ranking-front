import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporadaListComponent } from './temporada-list.component';

describe('TemporadaListComponent', () => {
  let component: TemporadaListComponent;
  let fixture: ComponentFixture<TemporadaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporadaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporadaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
