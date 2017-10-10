import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyPageComponent } from './supply-page.component';

describe('SupplyPageComponent', () => {
  let component: SupplyPageComponent;
  let fixture: ComponentFixture<SupplyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
