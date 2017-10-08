import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSurvivorsComponent } from './recent-survivors.component';

describe('RecentSurvivorsComponent', () => {
  let component: RecentSurvivorsComponent;
  let fixture: ComponentFixture<RecentSurvivorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentSurvivorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSurvivorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
