import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicanManagementComponent } from './applican-management.component';

describe('ApplicanManagementComponent', () => {
  let component: ApplicanManagementComponent;
  let fixture: ComponentFixture<ApplicanManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicanManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicanManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
