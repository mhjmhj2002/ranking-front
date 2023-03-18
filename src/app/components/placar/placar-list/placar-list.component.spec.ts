import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacarListComponent } from './placar-list.component';

describe('PlacarListComponent', () => {
  let component: PlacarListComponent;
  let fixture: ComponentFixture<PlacarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
