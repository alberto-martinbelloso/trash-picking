import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProfilePage } from './show-profile.page';

describe('ShowProfilePage', () => {
  let component: ShowProfilePage;
  let fixture: ComponentFixture<ShowProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
