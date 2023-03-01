import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSectionStartComponent } from './banner-section-start.component';

describe('BannerSectionStartComponent', () => {
  let component: BannerSectionStartComponent;
  let fixture: ComponentFixture<BannerSectionStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerSectionStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerSectionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
