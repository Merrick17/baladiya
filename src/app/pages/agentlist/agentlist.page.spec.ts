import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentlistPage } from './agentlist.page';

describe('AgentlistPage', () => {
  let component: AgentlistPage;
  let fixture: ComponentFixture<AgentlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
