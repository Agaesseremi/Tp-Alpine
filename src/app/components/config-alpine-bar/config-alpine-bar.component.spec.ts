import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAlpineBarComponent } from './config-alpine-bar.component';

describe('ConfigAlpineBarComponent', () => {
  let component: ConfigAlpineBarComponent;
  let fixture: ComponentFixture<ConfigAlpineBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigAlpineBarComponent]
    });
    fixture = TestBed.createComponent(ConfigAlpineBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
