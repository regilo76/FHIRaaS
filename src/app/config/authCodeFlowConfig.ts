  import { AuthConfig } from 'angular-oauth2-oidc';

  export const authCodeFlowConfig: AuthConfig = {
    // Url of the Identity Provider
    // Issuer url for azurewebsites
    //issuer: 'https://idsvr4.azurewebsites.net',
    // Issuer url for OKTA
    //issuer: 'https://dev-4560044.okta.com/oauth2/ausor2rmuHPtIrbsn5d6',
    // Issuer url for FHIRaaS
    //issuer: 'https://dev-4560044.okta.com/oauth2/ausor2rmuHPtIrbsn5d6',
    issuer: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_bGiEYUePT',

    // URL of the SPA to redirect the user to after login
    //redirectUri: window.location.origin + '/index.html',
    //redirectUri: window.location.origin + '/login',
    redirectUri: 'http://localhost:4200/login',

    // The SPA's id. The SPA is registerd with this id at the auth-server
    // clientId: 'server.code',
    //the clientid for 'https://idsvr4.azurewebsites.net'
    //clientId: 'spa',
    //The clientId for OKTA
    //clientId: '0oapi9i0hfrCc61Aw5d6',
    //The clientID for FHIRaaS
    clientId: '214e67m45iotg14jksknbi8oc2',

    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',

    responseType: 'code',

    // set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    //scope: 'openid profile email offline_access api',
    scope: 'openid profile user/*.*',

    strictDiscoveryDocumentValidation: false,

    showDebugInformation: true,
  };