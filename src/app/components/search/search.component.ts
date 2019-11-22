import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    constructor(private api: ApiService) {}

    ngOnInit() {
      this.api.test();
    }
    
    getUsers(username: string){
      this.api.getUser(username);
    }
}
