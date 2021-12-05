import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupCardComponent } from './startup-card.component';

describe('StartupCardComponent', () => {
  let component: StartupCardComponent;
  let fixture: ComponentFixture<StartupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
