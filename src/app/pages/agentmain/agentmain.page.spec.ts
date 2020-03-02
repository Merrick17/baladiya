import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentmainPage } from './agentmain.page';

describe('AgentmainPage', () => {
  let component: AgentmainPage;
  let fixture: ComponentFixture<AgentmainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentmainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentmainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
