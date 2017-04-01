import { Component, OnInit } from '@angular/core';
import { Campanha } from './campanha';
import { CampanhaService } from './campanha.service';

@Component({
    selector: 'campanha',
    templateUrl: './campanha.component.html',
    styleUrls: ['./campanha.component.css'],
    providers: [CampanhaService],
})
export class CampanhaComponent implements OnInit {

    collectionCampanha: Campanha[];
    model = new Campanha('');

    constructor(private service: CampanhaService) { }

    ngOnInit() {
        this.service.getCampanhas().subscribe(
            data => this.collectionCampanha = data,
            error => console.log('error ' + error));
    }

}
