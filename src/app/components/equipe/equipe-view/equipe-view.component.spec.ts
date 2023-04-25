import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEquipeComponent } from './equipe-view.component';

describe('ViewEquipeComponent', () => {
  let component: ViewEquipeComponent;
  let fixture: ComponentFixture<ViewEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
