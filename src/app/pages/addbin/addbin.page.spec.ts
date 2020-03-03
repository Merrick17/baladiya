import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddbinPage } from './addbin.page';

describe('AddbinPage', () => {
  let component: AddbinPage;
  let fixture: ComponentFixture<AddbinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddbinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
