import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

    constructor() {}

    ngOnInit() {
        this.menuItems = [

            {
                label: 'Pipes de Angular',
                icon: 'pi pi-desktop',
                items: [
                  {
                    label: 'Textos y fechas',
                    icon: 'pi pi-agn-left',
                    routerLink:'/'
                  },
                  {
                    label: 'Números',
                    icon: 'pi pi-dollar',
                    routerLink:['/numbers']
                  },
                  {
                    label: 'No comunes ',
                    icon: 'pi pi-globe',
                    routerLink:['/uncommon']
                  }
                ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog',
                items: [
                  {
                    label: 'Custom Pipes',
                    icon: 'pi pi-cog',
                    routerLink:['/custom']
                  }
                ]
            }

            ]

}

}
