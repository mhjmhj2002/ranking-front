import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFaseComponent } from './fase-add.component';

describe('AddFaseComponent', () => {
  let component: AddFaseComponent;
  let fixture: ComponentFixture<AddFaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
