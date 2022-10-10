import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeriaComponentComponent } from './mensajeria-component.component';

describe('MensajeriaComponentComponent', () => {
  let component: MensajeriaComponentComponent;
  let fixture: ComponentFixture<MensajeriaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeriaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeriaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
