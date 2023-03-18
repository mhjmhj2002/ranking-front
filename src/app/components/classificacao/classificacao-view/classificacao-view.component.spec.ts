import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassificacaoComponent } from './classificacao-view.component';

describe('ViewClassificacaoComponent', () => {
  let component: ViewClassificacaoComponent;
  let fixture: ComponentFixture<ViewClassificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClassificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
