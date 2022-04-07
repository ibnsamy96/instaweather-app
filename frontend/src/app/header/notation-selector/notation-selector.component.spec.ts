import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotationSelectorComponent } from './notation-selector.component';

describe('NotationSelectorComponent', () => {
  let component: NotationSelectorComponent;
  let fixture: ComponentFixture<NotationSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotationSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
