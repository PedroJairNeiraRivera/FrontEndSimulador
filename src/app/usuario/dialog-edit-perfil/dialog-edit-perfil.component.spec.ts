import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditPerfilComponent } from './dialog-edit-perfil.component';

describe('DialogEditPerfilComponent', () => {
  let component: DialogEditPerfilComponent;
  let fixture: ComponentFixture<DialogEditPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
