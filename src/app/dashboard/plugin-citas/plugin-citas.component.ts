import { Component } from '@angular/core';

@Component({
  selector: 'app-plugin-citas',
  templateUrl: './plugin-citas.component.html',
  styleUrls: ['./plugin-citas.component.css']
})
export class PluginCitasComponent {

  options: any[] = [
    {label: 'Hoy', value: 'hoy'}, 
    {label: 'Semana', value: 'semana'},
    {label: 'Mes', value: 'mes'}
  ];
  selection: string = 'hoy';
  events: any[] = [
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  ];

}
