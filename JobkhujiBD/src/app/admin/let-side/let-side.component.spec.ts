import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetSideComponent } from './let-side.component';

describe('LetSideComponent', () => {
  let component: LetSideComponent;
  let fixture: ComponentFixture<LetSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
