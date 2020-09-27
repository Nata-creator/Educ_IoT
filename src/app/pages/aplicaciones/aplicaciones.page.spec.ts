import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AplicacionesPage } from './aplicaciones.page';

describe('AplicacionesPage', () => {
  let component: AplicacionesPage;
  let fixture: ComponentFixture<AplicacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AplicacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
