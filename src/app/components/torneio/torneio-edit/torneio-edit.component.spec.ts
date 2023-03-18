import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTorneioComponent } from './torneio-edit.component';

describe('EditTorneioComponent', () => {
  let component: EditTorneioComponent;
  let fixture: ComponentFixture<EditTorneioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTorneioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTorneioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
