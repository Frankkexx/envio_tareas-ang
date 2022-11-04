import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentaComponentComponent } from './encuenta-component.component';

describe('EncuentaComponentComponent', () => {
  let component: EncuentaComponentComponent;
  let fixture: ComponentFixture<EncuentaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuentaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuentaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
