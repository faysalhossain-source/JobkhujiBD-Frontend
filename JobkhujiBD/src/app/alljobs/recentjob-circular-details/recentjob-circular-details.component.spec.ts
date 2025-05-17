import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenJobcircularComponent } from './recentjob-circular-details.component';

describe('RecentjobCircularDetailsComponent', () => {
  let component: RecenJobcircularComponent;
  let fixture: ComponentFixture<RecenJobcircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecenJobcircularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecenJobcircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
