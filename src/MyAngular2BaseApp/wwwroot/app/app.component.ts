import {Component, OnInit} from "angular2/core";
import {Http, Response} from "angular2/http";
import 'rxjs/Rx';

@Component({
    selector: "my-app",
    template: `
        <h1>My First Angular 2 App</h1>
        <ul>
          <li *ngFor="#value of values">
           {{value}}
          </li>
        </ul>
        `
})
export class AppComponent implements OnInit {
    private values: string[];

    constructor(private http: Http) {
    }

    ngOnInit() {
        return this.http.get("/api/values")
            .map((res: Response) => <string[]>res.json())
            .subscribe((data:string[]) => this.values = data);
    }
}