import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGrupoComponent } from './grupo-view.component';

describe('ViewGrupoComponent', () => {
  let component: ViewGrupoComponent;
  let fixture: ComponentFixture<ViewGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
