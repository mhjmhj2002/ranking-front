import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaisComponent } from './pais-add.component';

describe('AddPaisComponent', () => {
  let component: AddPaisComponent;
  let fixture: ComponentFixture<AddPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
