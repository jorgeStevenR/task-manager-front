import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtarea } from './subtarea';

describe('Subtarea', () => {
  let component: Subtarea;
  let fixture: ComponentFixture<Subtarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subtarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subtarea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
