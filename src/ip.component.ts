import {Component, OnInit} from '@angular/core';
// B4: them component IPService ben ip.service.ts vo
import {IPService} from './ip.service';

@Component({
    selector: 'app-ip',
    template: '<h3>My ip: {{myIP|json}}</h3>',
    // B5: them thuoc tinh providers
    providers: [IPService]
})

export class IpComponent implements OnInit {
    myIP: string;
    // B6: tao 1 doi tuong thuoc IPService
    constructor(private ipService: IPService) {}

    ngOnInit(): void {
        this.ipService.getIp()
        .then(ip => this.myIP = ip);
    }
}
