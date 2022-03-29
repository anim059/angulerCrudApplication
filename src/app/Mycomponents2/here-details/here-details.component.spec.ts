import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereDetailsComponent } from './here-details.component';

describe('HereDetailsComponent', () => {
  let component: HereDetailsComponent;
  let fixture: ComponentFixture<HereDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HereDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HereDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
