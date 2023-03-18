import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProrrogacaoComponent } from './prorrogacao-view.component';

describe('ViewProrrogacaoComponent', () => {
  let component: ViewProrrogacaoComponent;
  let fixture: ComponentFixture<ViewProrrogacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProrrogacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProrrogacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
