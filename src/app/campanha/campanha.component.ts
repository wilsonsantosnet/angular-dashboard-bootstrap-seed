import { ModalDirective } from 'ng2-bootstrap/modal';
import { ViewChild } from '@angular/core/src/metadata/di';
import { Http, RequestOptions } from '@angular/http';
import { ApiService } from '../shared/api.service';
import { Component, Injector, OnInit } from '@angular/core';
import { Campanha } from './campanha';

@Component({
    selector: 'campanha',
    templateUrl: './campanha.component.html',
    styleUrls: ['./campanha.component.css'],
    providers: [ApiService],
})
export class CampanhaComponent implements OnInit {

    @ViewChild('createModal') public createModal: ModalDirective;

    collectionCampanha: Campanha[];
    model = new Campanha();

    constructor(private api: ApiService<Campanha>) {
        this.api.setResource(new Campanha());
    }

    ngOnInit() {
        this.Load();
    }

    Load() {
        this.api.Get().subscribe(data => this.collectionCampanha = data);
    }

    Create() {
        this.api.Post(this.model).subscribe(data => this.onCreate(data));
    }

    onCreate(data) {
        this.createModal.hide();
        this.Load();
    }

}
