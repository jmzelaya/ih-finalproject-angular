import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAlliesComponent } from './my-allies.component';

describe('MyAlliesComponent', () => {
  let component: MyAlliesComponent;
  let fixture: ComponentFixture<MyAlliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAlliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAlliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
