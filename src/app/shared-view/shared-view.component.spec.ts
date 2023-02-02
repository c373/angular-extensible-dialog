import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedViewComponent } from './shared-view.component';

describe('SharedViewComponent', () => {
  let component: SharedViewComponent;
  let fixture: ComponentFixture<SharedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
