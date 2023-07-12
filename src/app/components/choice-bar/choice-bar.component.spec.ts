import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceBarComponent } from './choice-bar.component';

describe('ChoiceBarComponent', () => {
  let component: ChoiceBarComponent;
  let fixture: ComponentFixture<ChoiceBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiceBarComponent]
    });
    fixture = TestBed.createComponent(ChoiceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
