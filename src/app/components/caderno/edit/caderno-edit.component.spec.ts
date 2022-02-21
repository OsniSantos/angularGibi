import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadernoEditComponent } from './caderno-edit.component';

describe('CadernoEditComponent', () => {
  let component: CadernoEditComponent;
  let fixture: ComponentFixture<CadernoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadernoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadernoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
