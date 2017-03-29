import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class UserService {

    constructor(private http: Http) {
    }

    findById(id: number): string {
        return "nick"
    }
}