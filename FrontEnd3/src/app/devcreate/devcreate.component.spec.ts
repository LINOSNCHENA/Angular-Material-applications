import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevcreateComponent } from './devcreate.component';

describe('DevcreateComponent', () => {
  let component: DevcreateComponent;
  let fixture: ComponentFixture<DevcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevcreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
