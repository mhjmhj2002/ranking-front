import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesListComponent } from './paises-list.component';

describe('PaisesListComponent', () => {
  let component: PaisesListComponent;
  let fixture: ComponentFixture<PaisesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
