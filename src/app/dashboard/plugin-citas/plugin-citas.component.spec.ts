import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginCitasComponent } from './plugin-citas.component';

describe('PluginCitasComponent', () => {
  let component: PluginCitasComponent;
  let fixture: ComponentFixture<PluginCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PluginCitasComponent]
    });
    fixture = TestBed.createComponent(PluginCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
