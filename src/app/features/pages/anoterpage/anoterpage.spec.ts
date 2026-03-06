import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anoterpage } from './anoterpage';

describe('Anoterpage', () => {
  let component: Anoterpage;
  let fixture: ComponentFixture<Anoterpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anoterpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anoterpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
