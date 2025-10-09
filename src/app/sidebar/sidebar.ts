import { Component, signal } from '@angular/core';

interface MenuItem {
  icon: string;
  label: string;
  active: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isExpanded = signal(false);

  menuItems: MenuItem[] = [
    { icon: 'home.svg', label: 'Inicio', active: true },
    { icon: 'hoja1.svg', label: 'Contratos', active: false },
    { icon: 'Tool.svg', label: 'Acciones', active: false },
    { icon: 'star.svg', label: 'Objetivos', active: false },
    { icon: 'money.svg', label: 'Herramientas', active: false },
    { icon: 'talk2.svg', label: 'Servicio al cliente', active: false },
  ];

  toggleSidebar(): void {
    this.isExpanded.update((value) => !value);
  }
  expandSidebar(): void {
    this.isExpanded.set(true);
  }

  collapseSidebar(): void {
    this.isExpanded.set(false);
  }

  selectMenuItem(index: number): void {
    this.menuItems.forEach((item, i) => {
      item.active = i === index;
    });
  }
}
