import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTorneioComponent } from './torneio-add.component';

describe('AddTorneioComponent', () => {
  let component: AddTorneioComponent;
  let fixture: ComponentFixture<AddTorneioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTorneioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTorneioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
