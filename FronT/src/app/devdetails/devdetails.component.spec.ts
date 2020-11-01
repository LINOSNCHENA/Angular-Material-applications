import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevdetailsComponent } from './devdetails.component';

describe('DevdetailsComponent', () => {
  let component: DevdetailsComponent;
  let fixture: ComponentFixture<DevdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
