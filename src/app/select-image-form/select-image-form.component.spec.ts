import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectImageFormComponent } from './select-image-form.component';

describe('SelectImageFormComponent', () => {
  let component: SelectImageFormComponent;
  let fixture: ComponentFixture<SelectImageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectImageFormComponent]
    });
    fixture = TestBed.createComponent(SelectImageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
