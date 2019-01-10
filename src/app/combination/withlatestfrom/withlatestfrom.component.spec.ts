import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithlatestfromComponent } from './withlatestfrom.component';

describe('WithlatestfromComponent', () => {
  let component: WithlatestfromComponent;
  let fixture: ComponentFixture<WithlatestfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithlatestfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithlatestfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
