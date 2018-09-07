import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementorElementComponent } from './incrementor-element.component';

describe('IncrementorElementComponent', () => {
  let component: IncrementorElementComponent;
  let fixture: ComponentFixture<IncrementorElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementorElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementorElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
