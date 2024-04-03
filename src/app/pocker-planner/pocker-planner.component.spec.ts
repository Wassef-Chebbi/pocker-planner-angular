import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PockerPlannerComponent } from './pocker-planner.component';

describe('PockerPlannerComponent', () => {
  let component: PockerPlannerComponent;
  let fixture: ComponentFixture<PockerPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PockerPlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PockerPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
