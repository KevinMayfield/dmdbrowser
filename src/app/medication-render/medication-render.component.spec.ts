import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationRenderComponent } from './resource-render.component';

describe('ResourceRenderComponent', () => {
  let component: MedicationRenderComponent;
  let fixture: ComponentFixture<MedicationRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
