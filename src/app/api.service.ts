import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private httpClient: HttpClient) {}

    test(): Promise<any> {
        return this.httpClient
            .get(`${environment.urlApi}`, {
                headers: {
                    Authorization: `token ${environment.apiKey}`,
                },
            })
            .toPromise()
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    getUser(q: string): Promise<any> {
        return this.httpClient
            .get(`${environment.urlApi}/search/users`, {
                headers: {
                    Authorization: `token ${environment.apiKey}`,
                },
                params: {
                    q,
                },
            })
            .toPromise()
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }
}
