import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    findById(id: number): Observable<Object> {
        return this.httpClient.get('/json');
    }
}