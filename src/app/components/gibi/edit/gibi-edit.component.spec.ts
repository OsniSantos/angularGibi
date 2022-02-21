import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GibiEditComponent } from './gibi-edit.component';

describe('GibiEditComponent', () => {
  let component: GibiEditComponent;
  let fixture: ComponentFixture<GibiEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GibiEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GibiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
