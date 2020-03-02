import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgentloginPage } from './agentlogin.page';

describe('AgentloginPage', () => {
  let component: AgentloginPage;
  let fixture: ComponentFixture<AgentloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
