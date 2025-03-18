import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupComponentComponent } from './login-signup-component.component';

describe('LoginSignupComponentComponent', () => {
  let component: LoginSignupComponentComponent;
  let fixture: ComponentFixture<LoginSignupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignupComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSignupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
