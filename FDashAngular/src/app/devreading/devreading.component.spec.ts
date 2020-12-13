import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevreadingComponent } from './devreading.component';

describe('DevreadingComponent', () => {
  let component: DevreadingComponent;
  let fixture: ComponentFixture<DevreadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevreadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
