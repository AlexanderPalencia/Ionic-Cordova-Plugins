import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SqlliteKeyValuePage } from './sqllite-key-value.page';

describe('SqlliteKeyValuePage', () => {
  let component: SqlliteKeyValuePage;
  let fixture: ComponentFixture<SqlliteKeyValuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlliteKeyValuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SqlliteKeyValuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
