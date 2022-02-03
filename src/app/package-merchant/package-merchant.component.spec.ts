import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageMerchantComponent } from './package-merchant.component';

describe('PackageMerchantComponent', () => {
  let component: PackageMerchantComponent;
  let fixture: ComponentFixture<PackageMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageMerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
