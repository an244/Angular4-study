import {Component} from '@angular/core';
import {Http} from '@angular/http';

// de bien cac Observable thanh Promise
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'app-ip',
    template: '<h3>My ip: {{myIP|json}}</h3>'
})

export class IpComponent {
    myIP: string;
    constructor(private http: Http) {
        this.http.get('http://ip.jsontest.com')
        // mac dinh http.get() se ko co Promise nen phai import o tren
         .toPromise()
          .then(res => res.json())
          .then(resJson => this.myIP = resJson)
          .catch(err => console.log(err.message));
    }
}
