import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmonialSection } from './testmonial-section';

describe('TestmonialSection', () => {
  let component: TestmonialSection;
  let fixture: ComponentFixture<TestmonialSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestmonialSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestmonialSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
