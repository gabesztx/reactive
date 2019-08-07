import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicObsComponent } from './basic-obs.component';

describe('BasicObsComponent', () => {
  let component: BasicObsComponent;
  let fixture: ComponentFixture<BasicObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
