import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QueEsPage } from './que-es.page';

describe('QueEsPage', () => {
  let component: QueEsPage;
  let fixture: ComponentFixture<QueEsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueEsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QueEsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
