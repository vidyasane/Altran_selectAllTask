import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCComponent } from './first-c.component';

describe('FirstCComponent', () => {
  let component: FirstCComponent;
  let fixture: ComponentFixture<FirstCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
