import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodoHomePage } from './todo-home.page';

describe('TodoHomePage', () => {
  let component: TodoHomePage;
  let fixture: ComponentFixture<TodoHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
