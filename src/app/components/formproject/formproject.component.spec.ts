import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormprojectComponent } from './formproject.component';

describe('FormprojectComponent', () => {
  let component: FormprojectComponent;
  let fixture: ComponentFixture<FormprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
