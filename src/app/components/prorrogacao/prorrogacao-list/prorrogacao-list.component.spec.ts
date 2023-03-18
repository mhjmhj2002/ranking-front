import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProrrogacaoListComponent } from './prorrogacao-list.component';

describe('ProrrogacaoListComponent', () => {
  let component: ProrrogacaoListComponent;
  let fixture: ComponentFixture<ProrrogacaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProrrogacaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProrrogacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
