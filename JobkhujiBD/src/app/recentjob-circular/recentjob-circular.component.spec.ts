import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentjobCircularComponent } from './recentjob-circular.component';

describe('RecentjobCircularComponent', () => {
  let component: RecentjobCircularComponent;
  let fixture: ComponentFixture<RecentjobCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentjobCircularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentjobCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
