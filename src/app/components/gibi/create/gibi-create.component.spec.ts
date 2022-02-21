import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GibiCreateComponent } from './gibi-create.component';

describe('GibiCreateComponent', () => {
  let component: GibiCreateComponent;
  let fixture: ComponentFixture<GibiCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GibiCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GibiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
