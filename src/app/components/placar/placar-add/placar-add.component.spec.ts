import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlacarComponent } from './placar-add.component';

describe('AddPlacarComponent', () => {
  let component: AddPlacarComponent;
  let fixture: ComponentFixture<AddPlacarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlacarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlacarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
