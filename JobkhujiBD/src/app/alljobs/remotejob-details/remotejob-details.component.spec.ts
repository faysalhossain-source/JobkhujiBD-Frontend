import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotejobDetailsComponent } from './remotejob-details.component';

describe('RemotejobDetailsComponent', () => {
  let component: RemotejobDetailsComponent;
  let fixture: ComponentFixture<RemotejobDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemotejobDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemotejobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
