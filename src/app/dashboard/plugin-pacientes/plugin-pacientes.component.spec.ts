import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginPacientesComponent } from './plugin-pacientes.component';

describe('PluginPacientesComponent', () => {
  let component: PluginPacientesComponent;
  let fixture: ComponentFixture<PluginPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PluginPacientesComponent]
    });
    fixture = TestBed.createComponent(PluginPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
