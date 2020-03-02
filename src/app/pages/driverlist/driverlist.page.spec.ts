import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverlistPage } from './driverlist.page';

describe('DriverlistPage', () => {
  let component: DriverlistPage;
  let fixture: ComponentFixture<DriverlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
