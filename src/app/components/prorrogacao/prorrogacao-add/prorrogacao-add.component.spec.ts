import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProrrogacaoComponent } from './prorrogacao-add.component';

describe('AddProrrogacaoComponent', () => {
  let component: AddProrrogacaoComponent;
  let fixture: ComponentFixture<AddProrrogacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProrrogacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProrrogacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
