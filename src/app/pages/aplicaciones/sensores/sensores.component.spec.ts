import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SensoresComponent } from './sensores.component';

describe('SensoresComponent', () => {
  let component: SensoresComponent;
  let fixture: ComponentFixture<SensoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensoresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SensoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
