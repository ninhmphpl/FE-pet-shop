import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiMenuComponent } from './mobi-menu.component';

describe('MobiMenuComponent', () => {
  let component: MobiMenuComponent;
  let fixture: ComponentFixture<MobiMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobiMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
