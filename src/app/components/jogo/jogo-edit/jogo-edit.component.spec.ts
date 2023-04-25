import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJogoComponent } from './jogo-edit.component';

describe('EditJogoComponent', () => {
  let component: EditJogoComponent;
  let fixture: ComponentFixture<EditJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
