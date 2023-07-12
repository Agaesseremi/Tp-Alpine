import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImageComperatorComponent } from './view-image-comperator.component';

describe('ViewImageComperatorComponent', () => {
  let component: ViewImageComperatorComponent;
  let fixture: ComponentFixture<ViewImageComperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewImageComperatorComponent]
    });
    fixture = TestBed.createComponent(ViewImageComperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
