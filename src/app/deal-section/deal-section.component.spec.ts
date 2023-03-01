import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealSectionComponent } from './deal-section.component';

describe('DealSectionComponent', () => {
  let component: DealSectionComponent;
  let fixture: ComponentFixture<DealSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
