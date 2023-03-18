import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassificacaoComponent } from './classificacao-edit.component';

describe('EditClassificacaoComponent', () => {
  let component: EditClassificacaoComponent;
  let fixture: ComponentFixture<EditClassificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClassificacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
