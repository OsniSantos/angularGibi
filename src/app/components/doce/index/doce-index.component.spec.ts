import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoceIndexComponent } from './doce-index.component';

describe('DoceIndexComponent', () => {
  let component: DoceIndexComponent;
  let fixture: ComponentFixture<DoceIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoceIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
