import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient, public jwtHelper : JwtHelperService) {
    }
    public getToken(): string {
        return localStorage.getItem('token');
    }
    public isAuthenticated(): boolean {
        // get the token
        const token = this.getToken();
        // return a boolean reflecting
        // whether or not the token is expired
        if (token != undefined && this.jwtHelper.isTokenExpired(token, 60)) {
          this.refresh();
        }
        return !this.jwtHelper.isTokenExpired(token,5)
    }

    doAuthenticate() {
        console.log('Auth Token');
        let body = new URLSearchParams();
        body.append('grant_type', 'client_credentials');
        body.append('client_id', environment.config.ontoClientId);
        body.append('client_secret', environment.config.ontoClientSecret);
        let headers: HttpHeaders = new HttpHeaders(
        );
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post<any>('https://ontology.nhs.uk/authorisation/auth/realms/nhs-digital-terminology/protocol/openid-connect/token',body.toString(),
            { headers: headers }).subscribe(response => {
            localStorage.setItem('token',response.access_token);
            localStorage.setItem('refresh_token',response.refresh_token);
        },err =>{
            console.log('oops')
            console.log(err)
        })
    }

    refresh() {
        console.log('Token Refresh');
        // A bit of a semaphore to pretty loop.
        localStorage.removeItem('token');
        let body = new URLSearchParams();
        body.append('grant_type', 'client_credentials');
        body.append('client_id', environment.config.ontoClientId);
        body.append('client_secret', environment.config.ontoClientSecret);
        body.append('refresh_token', localStorage.getItem('refresh_token'));
        let headers: HttpHeaders = new HttpHeaders(
        );
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post<any>('https://ontology.nhs.uk/authorisation/auth/realms/nhs-digital-terminology/protocol/openid-connect/token',body.toString(),
            { headers: headers }).subscribe(response => {
            console.log(response)
            localStorage.setItem('token',response.access_token);
            localStorage.setItem('refresh_token',response.refresh_token);
            console.log(response.access_token)
        },err =>{
            console.log('oops')
            console.log(err)
        })
    }
}
