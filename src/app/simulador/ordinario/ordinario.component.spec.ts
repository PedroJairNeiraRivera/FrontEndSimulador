import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinarioComponent } from './ordinario.component';

describe('OrdinarioComponent', () => {
  let component: OrdinarioComponent;
  let fixture: ComponentFixture<OrdinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdinarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
