import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoteJobsComponent } from './remote.component';



describe('RemoteComponent', () => {
  let component: RemoteJobsComponent ;
  let fixture: ComponentFixture<RemoteJobsComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteJobsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
