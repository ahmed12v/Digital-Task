import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBtn } from './scroll-btn';

describe('ScrollBtn', () => {
  let component: ScrollBtn;
  let fixture: ComponentFixture<ScrollBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
