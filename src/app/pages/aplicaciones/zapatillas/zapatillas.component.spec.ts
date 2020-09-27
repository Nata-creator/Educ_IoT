import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZapatillasComponent } from './zapatillas.component';

describe('ZapatillasComponent', () => {
  let component: ZapatillasComponent;
  let fixture: ComponentFixture<ZapatillasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZapatillasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZapatillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
