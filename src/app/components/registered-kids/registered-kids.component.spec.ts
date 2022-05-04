import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredKidsComponent } from './registered-kids.component';

describe('RegisteredKidsComponent', () => {
  let component: RegisteredKidsComponent;
  let fixture: ComponentFixture<RegisteredKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
