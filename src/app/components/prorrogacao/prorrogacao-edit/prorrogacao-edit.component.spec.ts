import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProrrogacaoComponent } from './prorrogacao-edit.component';

describe('EditProrrogacaoComponent', () => {
  let component: EditProrrogacaoComponent;
  let fixture: ComponentFixture<EditProrrogacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProrrogacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProrrogacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
