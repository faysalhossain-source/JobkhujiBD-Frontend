import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutEmployeerComponent } from './main-layout-employeer.component';

describe('MainLayoutEmployeerComponent', () => {
  let component: MainLayoutEmployeerComponent;
  let fixture: ComponentFixture<MainLayoutEmployeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutEmployeerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayoutEmployeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
