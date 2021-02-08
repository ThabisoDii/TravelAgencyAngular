import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardProfileComponent } from './standard-profile.component';

describe('StandardProfileComponent', () => {
  let component: StandardProfileComponent;
  let fixture: ComponentFixture<StandardProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
