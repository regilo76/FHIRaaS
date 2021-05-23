import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    claims;
    constructor(private oauthService:OAuthService) { }

    ngOnInit():void{ 

    }

    get token(){
        this.claims = this.oauthService.getIdentityClaims();
        if(this.claims){
            console.log('-- home claims --', this.claims);
        }
        return this.claims ? this.claims : null;
    }
}