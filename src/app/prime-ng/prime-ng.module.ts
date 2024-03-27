import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';


@NgModule({
exports:[
  CardModule,
  FieldsetModule,
  InputTextModule,
  MenubarModule,
  MenuModule,
  PanelModule,
  ButtonModule,
  ToolbarModule,
  TableModule
]
})
export class PrimeNgModule { }
