import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GibiIndexComponent } from './gibi-index.component';

describe('GibiIndexComponent', () => {
  let component: GibiIndexComponent;
  let fixture: ComponentFixture<GibiIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GibiIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GibiIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
