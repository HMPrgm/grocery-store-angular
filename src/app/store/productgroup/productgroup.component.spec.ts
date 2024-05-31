import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductgroupComponent } from './productgroup.component';

describe('ProductgroupComponent', () => {
  let component: ProductgroupComponent;
  let fixture: ComponentFixture<ProductgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductgroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
