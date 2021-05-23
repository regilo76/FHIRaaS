import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    claims;
    constructor(private oauthService:OAuthService) { }

    ngOnInit(): void {

    }
    logout(){
        console.log('logout');
        this.oauthService.logOut();
    }
    get token(){
        this.claims = this.oauthService.getIdentityClaims();
        if(this.claims){
            console.log('--Nav-claims--', this.claims);
        }
        return this.claims ? this.claims : null;
    }
}