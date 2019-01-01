import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcactAllComponent } from './concact-all.component';

describe('ConcactAllComponent', () => {
  let component: ConcactAllComponent;
  let fixture: ComponentFixture<ConcactAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcactAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcactAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
