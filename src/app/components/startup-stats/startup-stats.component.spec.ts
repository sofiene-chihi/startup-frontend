import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupStatsComponent } from './startup-stats.component';

describe('StartupStatsComponent', () => {
  let component: StartupStatsComponent;
  let fixture: ComponentFixture<StartupStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
