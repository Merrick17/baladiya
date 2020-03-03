import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BinlistPage } from './binlist.page';

describe('BinlistPage', () => {
  let component: BinlistPage;
  let fixture: ComponentFixture<BinlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BinlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
