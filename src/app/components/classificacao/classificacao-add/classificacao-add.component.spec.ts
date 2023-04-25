import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassificacaoComponent } from './classificacao-add.component';

describe('AddClassificacaoComponent', () => {
  let component: AddClassificacaoComponent;
  let fixture: ComponentFixture<AddClassificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClassificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
