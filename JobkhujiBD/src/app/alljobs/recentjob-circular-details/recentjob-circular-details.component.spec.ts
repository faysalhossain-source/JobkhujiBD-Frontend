import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentjobCircularDetailsComponent } from './recentjob-circular-details.component';

describe('RecentjobCircularDetailsComponent', () => {
  let component: RecentjobCircularDetailsComponent;
  let fixture: ComponentFixture<RecentjobCircularDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentjobCircularDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentjobCircularDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
