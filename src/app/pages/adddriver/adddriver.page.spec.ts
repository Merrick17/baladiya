import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdddriverPage } from './adddriver.page';

describe('AdddriverPage', () => {
  let component: AdddriverPage;
  let fixture: ComponentFixture<AdddriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddriverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdddriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
