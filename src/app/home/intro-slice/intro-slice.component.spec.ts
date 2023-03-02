import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSliceComponent } from './intro-slice.component';

describe('IntroSliceComponent', () => {
  let component: IntroSliceComponent;
  let fixture: ComponentFixture<IntroSliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroSliceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
