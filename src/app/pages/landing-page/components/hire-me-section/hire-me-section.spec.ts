import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireMeSection } from './hire-me-section';

describe('HireMeSection', () => {
  let component: HireMeSection;
  let fixture: ComponentFixture<HireMeSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HireMeSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireMeSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
