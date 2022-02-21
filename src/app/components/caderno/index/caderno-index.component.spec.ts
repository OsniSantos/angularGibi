import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadernoIndexComponent } from './caderno-index.component';

describe('CadernoIndexComponent', () => {
  let component: CadernoIndexComponent;
  let fixture: ComponentFixture<CadernoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadernoIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadernoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
