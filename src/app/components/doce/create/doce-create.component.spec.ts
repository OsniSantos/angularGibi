import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoceCreateComponent } from './doce-create.component';

describe('DoceCreateComponent', () => {
  let component: DoceCreateComponent;
  let fixture: ComponentFixture<DoceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoceCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
