import {Component, OnInit} from "angular2/core";
import {Http, Response} from "angular2/http";
import 'rxjs/Rx';

@Component({
    selector: 'sample-link',
    template: '<h2>Sample Destination</h2>'
})
export class SampleComponent { }

@Component({
    selector: "another-sample",
    template: `
        <h2>Another Sample Destination</h2>
        <ul>
          <li *ngFor="#value of values">
           {{value}}
          </li>
        </ul>
        `
})
export class AnotherSampleComponent implements OnInit {
    private values: string[];

    constructor(private http: Http) {
    }

    ngOnInit() {
        return this.http.get("/api/values")
            .map((res: Response) => <string[]>res.json())
            .subscribe((data: string[]) => this.values = data);
    }
}