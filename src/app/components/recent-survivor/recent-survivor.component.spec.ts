import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSurvivorComponent } from './recent-survivor.component';

describe('RecentSurvivorComponent', () => {
  let component: RecentSurvivorComponent;
  let fixture: ComponentFixture<RecentSurvivorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentSurvivorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSurvivorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
