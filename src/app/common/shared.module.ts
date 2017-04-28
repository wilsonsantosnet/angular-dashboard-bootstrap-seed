import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MakeSelectComponent } from './components/select.component';
import { MakePaginationComponent } from './components/pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
    ],
    declarations: [
        MakeSelectComponent,
        MakePaginationComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        PaginationModule,
        ModalModule,
        MakeSelectComponent,
        MakePaginationComponent
    ],
})
export class SharedModule { }
