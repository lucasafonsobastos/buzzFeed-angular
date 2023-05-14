import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QizzComponent } from './qizz.component';

describe('QizzComponent', () => {
  let component: QizzComponent;
  let fixture: ComponentFixture<QizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QizzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
