import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMemberModalPage } from './remove-member-modal.page';

describe('RemoveMemberModalPage', () => {
  let component: RemoveMemberModalPage;
  let fixture: ComponentFixture<RemoveMemberModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveMemberModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveMemberModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
