import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinateSubjectComponent } from './combinate-subject.component';

describe('CombinateSubjectComponent', () => {
  let component: CombinateSubjectComponent;
  let fixture: ComponentFixture<CombinateSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinateSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinateSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
