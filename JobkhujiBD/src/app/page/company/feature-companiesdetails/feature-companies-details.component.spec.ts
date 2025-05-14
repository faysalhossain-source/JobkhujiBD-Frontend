import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCompaniesDetailsComponent } from './feature-companies-details.component';


describe('FeatureCompaneisDetailsComponent', () => {
  let component: FeatureCompaniesDetailsComponent;
  let fixture: ComponentFixture<FeatureCompaniesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCompaniesDetailsComponent],
      declarations: [FeatureCompaniesDetailsComponent],
      providers: [],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureCompaniesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
