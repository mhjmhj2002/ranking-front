import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJogoComponent } from './jogo-view.component';

describe('ViewJogoComponent', () => {
  let component: ViewJogoComponent;
  let fixture: ComponentFixture<ViewJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
