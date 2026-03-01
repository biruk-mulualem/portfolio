import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSkillSection } from './technical-skill-section';

describe('TechnicalSkillSection', () => {
  let component: TechnicalSkillSection;
  let fixture: ComponentFixture<TechnicalSkillSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalSkillSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalSkillSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
