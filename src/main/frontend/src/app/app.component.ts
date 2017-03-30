import {Component} from "@angular/core";
import {UserService} from "./service/user.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [UserService]
})
export class AppComponent {
    title = 'app works!';

    constructor(private userService: UserService) {
        console.log("init AppComponent")
    }

    echo(): string {
        return this.userService.findById(1)
    }
}
