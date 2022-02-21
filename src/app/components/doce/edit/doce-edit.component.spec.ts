import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoceEditComponent } from './doce-edit.component';

describe('DoceEditComponent', () => {
  let component: DoceEditComponent;
  let fixture: ComponentFixture<DoceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
