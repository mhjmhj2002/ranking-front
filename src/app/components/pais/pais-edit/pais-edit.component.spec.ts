import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaisComponent } from './pais-edit.component';

describe('EditPaisComponent', () => {
  let component: EditPaisComponent;
  let fixture: ComponentFixture<EditPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
