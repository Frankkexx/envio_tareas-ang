import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasHijoComponentComponent } from './tareas-hijo-component.component';

describe('TareasHijoComponentComponent', () => {
  let component: TareasHijoComponentComponent;
  let fixture: ComponentFixture<TareasHijoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasHijoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasHijoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
