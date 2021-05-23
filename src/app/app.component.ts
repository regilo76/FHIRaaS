import { Component } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './config/authCodeFlowConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webinar';
  constructor(private oauthService: OAuthService){
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  login(){
    this.oauthService.initImplicitFlow();
  }
  logout(){
    this.oauthService.logOut();
  }
  get getUserName(){
    const claims = this.oauthService.getIdentityClaims();
    if(!claims){
      return null;
    }
    return claims['name'];
  }
}
