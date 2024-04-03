import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSessionComponent } from './editsession.component';

describe('EditsessionComponent', () => {
  let component: EditSessionComponent;
  let fixture: ComponentFixture<EditSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
