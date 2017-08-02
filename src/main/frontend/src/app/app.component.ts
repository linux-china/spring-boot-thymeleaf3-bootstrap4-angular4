import {Component} from "@angular/core";
import {UserService} from "./service/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [UserService]
})
export class AppComponent {
    user = {};

    constructor(private userService: UserService, httpClient: HttpClient) {
        console.log("init AppComponent");
        // remote service
        userService.findById(1).subscribe(result => this.user = result);
    }
}
