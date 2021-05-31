import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIndigoComponent } from './ng-indigo.component';

describe('NgIndigoComponent', () => {
  let component: NgIndigoComponent;
  let fixture: ComponentFixture<NgIndigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIndigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIndigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
