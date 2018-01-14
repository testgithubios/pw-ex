import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { FIELDS_USER1 } from '../mock/mock-field';
import { FIELDS_USER2 } from '../mock/mock-field';
import { FIELDS_ADMIN } from '../mock/mock-field';
import { User } from '../models/user';

@Injectable()
export class FieldService {
    currentUser: User;
    constructor() { }
    
    getFieldsByCurrentUser(): Observable<any[]> {
        
        this.currentUser = JSON.parse( localStorage.getItem('currentUser'));
        let username = this.currentUser.username;
        let password = this.currentUser.password;
        
        if( username == 'user1' && password == 'user1' ){
            return of(FIELDS_USER1 );
        }else if( username == 'user2' && password == 'user2' ) {
            return of( FIELDS_USER2 );
        }else if( username == 'admin' && password == 'admin' ) {
            
            
            return of( FIELDS_ADMIN );
        }
    }
}
