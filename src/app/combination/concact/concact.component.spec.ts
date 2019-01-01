import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcactComponent } from './concact.component';

describe('ConcactComponent', () => {
  let component: ConcactComponent;
  let fixture: ComponentFixture<ConcactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
