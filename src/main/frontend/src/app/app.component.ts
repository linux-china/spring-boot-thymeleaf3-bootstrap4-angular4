import {Component} from "@angular/core";
import {UserService} from "./service/user.service";
import {Http} from "@angular/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [UserService]
})
export class AppComponent {
    user = {id: 1, nick: "Jackie"};

    constructor(private userService: UserService, http: Http) {
        console.log("init AppComponent");
        // remote service
        // http.get('/json').subscribe(result => this.user = result.json());
    }

    echo(): string {
        return this.userService.findById(1)
    }
}
