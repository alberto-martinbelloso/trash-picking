import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamsOverview } from './teams.page';

describe('TeamsOverviewPage', () => {
  let component: TeamsOverview;
  let fixture: ComponentFixture<TeamsOverview>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamsOverview],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
