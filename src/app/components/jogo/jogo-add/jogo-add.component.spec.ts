import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJogoComponent } from './jogo-add.component';

describe('AddJogoComponent', () => {
  let component: AddJogoComponent;
  let fixture: ComponentFixture<AddJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
