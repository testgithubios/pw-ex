import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FieldComponent } from '../field/field.component';
import { HeaderComponent } from '../template/header/header.component';
import { SidebarComponent } from '../template/sidebar/sidebar.component';
@NgModule({
    imports: [CommonModule, MainRoutingModule,
              NgbModule.forRoot()],
    declarations: [MainComponent,FieldComponent,HeaderComponent,SidebarComponent]
})
export class MainModule { }
