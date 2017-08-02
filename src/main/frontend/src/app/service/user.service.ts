import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    findById(id: number): string {
        return "nick"
    }
}