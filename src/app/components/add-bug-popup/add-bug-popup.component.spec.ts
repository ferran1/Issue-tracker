import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBugPopupComponent } from './add-bug-popup.component';

describe('AddBugPopupComponent', () => {
  let component: AddBugPopupComponent;
  let fixture: ComponentFixture<AddBugPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBugPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBugPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
