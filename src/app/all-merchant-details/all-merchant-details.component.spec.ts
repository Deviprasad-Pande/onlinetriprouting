import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMerchantDetailsComponent } from './all-merchant-details.component';

describe('AllMerchantDetailsComponent', () => {
  let component: AllMerchantDetailsComponent;
  let fixture: ComponentFixture<AllMerchantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMerchantDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMerchantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
