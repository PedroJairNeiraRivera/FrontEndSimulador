import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraordinarioComponent } from './extraordinario.component';

describe('ExtraordinarioComponent', () => {
  let component: ExtraordinarioComponent;
  let fixture: ComponentFixture<ExtraordinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraordinarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraordinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
