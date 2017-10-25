// B1: them Injectable de co the tach service
import {Injectable} from '@angular/core';
// B2: them Http de su dung http service
import {Http} from '@angular/http';
// B3: them import nay de bien Objectable thanh Promise o duoi
import 'rxjs/add/operator/toPromise';

@Injectable()

export class IPService {
    constructor(private http: Http) {}
        getIp() {
            return this.http.get('http://ip.jsontest.com')
            // mac dinh http.get() se ko co Promise nen phai import o tren
             .toPromise()
              .then(res => res.json())
              .catch(err => console.log(err.message));
        }
}
