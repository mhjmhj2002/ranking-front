import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneioListComponent } from './torneio-list.component';

describe('TorneioListComponent', () => {
  let component: TorneioListComponent;
  let fixture: ComponentFixture<TorneioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorneioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
