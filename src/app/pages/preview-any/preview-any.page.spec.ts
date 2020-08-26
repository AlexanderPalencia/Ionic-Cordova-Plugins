import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviewAnyPage } from './preview-any.page';

describe('PreviewAnyPage', () => {
  let component: PreviewAnyPage;
  let fixture: ComponentFixture<PreviewAnyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewAnyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewAnyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
