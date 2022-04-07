import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherIconComponent } from './current-weather-icon.component';

describe('CurrentWeatherIconComponent', () => {
  let component: CurrentWeatherIconComponent;
  let fixture: ComponentFixture<CurrentWeatherIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentWeatherIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
