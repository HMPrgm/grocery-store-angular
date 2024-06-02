import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorebodyComponent } from './storebody.component';

describe('StorebodyComponent', () => {
  let component: StorebodyComponent;
  let fixture: ComponentFixture<StorebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorebodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
