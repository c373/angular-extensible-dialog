import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexDialogComponent } from './complex-dialog.component';

describe('ComplexDialogComponent', () => {
  let component: ComplexDialogComponent;
  let fixture: ComponentFixture<ComplexDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
