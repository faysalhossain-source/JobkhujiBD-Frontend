import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyDetailsComponent } from './companies-details.component'; 
import { CommonModule } from '@angular/common';

describe('CompanyDetailsComponent', () => {
  let component: CompanyDetailsComponent;
  let fixture: ComponentFixture<CompanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyDetailsComponent], // Declared the correct component
      imports: [CommonModule], // Add necessary modules
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
