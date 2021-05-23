import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from '../config/authCodeFlowConfig';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    claims;
    constructor(
        private oauthService: OAuthService,
        private router:Router
    ) { }

    ngOnInit(): void {
        this.configSso();
    }

    configSso(){
        this.oauthService.configure(authCodeFlowConfig);
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }

    login(){
        console.log('login');
        this.oauthService.setupAutomaticSilentRefresh();
        this.oauthService.initCodeFlow();
    }

    logout(){
        console.log('logout');
        this.oauthService.logOut();
    }

    get token(){
        this.claims = this.oauthService.getIdentityClaims();
        if(this.claims){
            console.log('-- Login claims --', this.claims);
            this.router.navigateByUrl('home');
        }
        return this.claims ? this.claims : null;
    }
}