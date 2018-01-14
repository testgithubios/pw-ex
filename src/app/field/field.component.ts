import { Component, OnInit } from '@angular/core';

import { FieldService } from '../services/field.service';

@Component( {
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.scss']
} )
export class FieldComponent implements OnInit {
    
    fields = [];
    
    constructor( private fieldservice : FieldService ) { }

    ngOnInit() {
        this.getFieldsByCurrentUser();
    }
    
    getFieldsByCurrentUser(): void {
        this.fieldservice.getFieldsByCurrentUser().subscribe(fields => this.fields = fields);
    }
}

