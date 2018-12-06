import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSplitDashboardComponent } from './ngx-split-dashboard.component';

describe('NgxSplitDashboardComponent', () => {
  let component: NgxSplitDashboardComponent;
  let fixture: ComponentFixture<NgxSplitDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSplitDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSplitDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
