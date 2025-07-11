import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneHeaderComponent } from './phone-header.component';

describe('PhoneHeaderComponent', () => {
  let component: PhoneHeaderComponent;
  let fixture: ComponentFixture<PhoneHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
