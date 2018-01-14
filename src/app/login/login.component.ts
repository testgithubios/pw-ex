import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { User } from '../models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component( {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
} )
export class LoginComponent implements OnInit {
    model: any = {};
    constructor( private router: Router) { }
    loading = false;
    returnUrl: string;
    ngOnInit() {
    }
    onLoggedin() {
        this.loading = true;
        let username = this.model.username;
        let password = this.model.password;
        if(typeof username !== "undefined" && typeof password !== "undefined"){
            
            localStorage.setItem( 'currentUser', JSON.stringify( { username: username, password: password } )  );
            this.returnUrl = '/main';
            this.router.navigate([this.returnUrl]);
            
        }
    }
}
