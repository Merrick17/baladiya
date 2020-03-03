import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrucklistPage } from './trucklist.page';

describe('TrucklistPage', () => {
  let component: TrucklistPage;
  let fixture: ComponentFixture<TrucklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrucklistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrucklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
