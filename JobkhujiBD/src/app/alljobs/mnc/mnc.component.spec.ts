import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MncComponent } from './mnc.component';

describe('MncComponent', () => {
  let component: MncComponent;
  let fixture: ComponentFixture<MncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
