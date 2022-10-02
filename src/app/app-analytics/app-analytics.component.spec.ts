import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAnalyticsComponent } from './app-analytics.component';

describe('AppAnalyticsComponent', () => {
  let component: AppAnalyticsComponent;
  let fixture: ComponentFixture<AppAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
