import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTorneioComponent } from './torneio-view.component';

describe('ViewTorneioComponent', () => {
  let component: ViewTorneioComponent;
  let fixture: ComponentFixture<ViewTorneioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTorneioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTorneioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
