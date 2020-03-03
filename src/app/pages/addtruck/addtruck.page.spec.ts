import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddtruckPage } from './addtruck.page';

describe('AddtruckPage', () => {
  let component: AddtruckPage;
  let fixture: ComponentFixture<AddtruckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtruckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddtruckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
