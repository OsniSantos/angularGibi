import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadernoCreateComponent } from './caderno-create.component';

describe('CadernoCreateComponent', () => {
  let component: CadernoCreateComponent;
  let fixture: ComponentFixture<CadernoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadernoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadernoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
