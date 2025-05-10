import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainComponentComponent } from './home-main-component.component';

describe('HomeMainComponentComponent', () => {
  let component: HomeMainComponentComponent;
  let fixture: ComponentFixture<HomeMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMainComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
