import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFrontBodyComponent } from './store-front-body.component';

describe('StoreFrontBodyComponent', () => {
  let component: StoreFrontBodyComponent;
  let fixture: ComponentFixture<StoreFrontBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreFrontBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreFrontBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
