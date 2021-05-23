import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ɵHAMMER_PROVIDERS__POST_R3__ } from '@angular/platform-browser';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})

/*export class PatientComponent implements OnInit{

    results;
    constructor(
        private oauthService: OAuthService,
        private router:Router,
        http: HttpClient
    ) { 
        //const path = 'https://api.github.com/search/repositories?q=regilo&type=users';
        const path = 'https://fhirauth.xyyjcinw.static-test-account.isccloud.io/Patient';
        this.results =  http.get(path);
        //this.results = 'Regilo';
    }

    ngOnInit():void {

    }
}*/
@Injectable()
export class PatientComponent {
    results;
    //accessToken;
    constructor(
        private oauthService: OAuthService,
        private router:Router,
        http: HttpClient
    ) { 
        /*let header = new HttpHeaders().append(
            "Authorization",
            "eyJraWQiOiJrZXgrU1Zkc3pHOTFLQnlnSmJlc21FQ3NrWHdvMUN5MlBXWWxLemtKZ0o4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3MjY4YjJiMy05YzI5LTQ3M2YtOTU3Ni1mZGQzYjYyYTUyMDEiLCJldmVudF9pZCI6ImM0YWQwNDIwLTNlMTAtNDU0Ni04MzgyLTJlYTljYjE4OTU3YyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgdXNlclwvKi4qIiwiYXV0aF90aW1lIjoxNjIwNTkyMDE5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9VSEtrZFZCbkQiLCJleHAiOjE2MjA1OTU2MTksImlhdCI6MTYyMDU5MjAyMSwidmVyc2lvbiI6MiwianRpIjoiZDY5OTc5MDAtNmQ5ZS00ZWUxLTlkZGYtZjM5YThmYTMyMTBmIiwiY2xpZW50X2lkIjoiNjA0NmwzMzg0dGxrYWRxOTJibWdoYXQ2bzEiLCJ1c2VybmFtZSI6InJlZ2lsbyJ9.LYvincbp_wffQM8isoCiwoe62_3OqfZHGMtSy-EMBPJTXgSH0G98RlUTkZ1awcpbY7xOQErm5z_TyvvH4M27e-sUCpG609ly0D1ZjIwMKwPgOqCHmE8cHB02z1Sy6uLRajf8x5fg1tmy_n5qoTwF1jxvyTb4-pZ5Ikgaazskg8VG9pPGIeuj-8x7T-_-yVAmFlxEdS38pIlDe8AGI9HS6bCHWFW-KDuAGIpUZ42r6H0CbroClbciN6wqDmi7SkKk46DNkxQ5NGto9629dy_ELGGtL9XW8UyDmvbuanL6Uu-eaAWPM5IPkGpcqXeOluo96I2MKl8E2J1z-XyulkGttg" //+ sessionStorage.getItem("access_token")
        );*/
        var cabeca = new Headers();
        cabeca.set('Accept', 'text/json');
        cabeca.set('Authorization', this.oauthService.authorizationHeader());



        //this.accessToken = this.oauthService.authorizationHeader();
        const path = 'https://fhirauth.xyyjcinw.static-test-account.isccloud.io/oauth2/Patient';
        //this.results =  http.get(path,{ headers: cabeca });

        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  this.oauthService.authorizationHeader())
          }
        this.results = http.get(path, header)

        //this.results = sessionStorage.getItem("access_token");
        //this.results = this.oauthService.authorizationHeader();
    }

}

