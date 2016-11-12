import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http"
import {Observable}  from "rxjs/observable"

@Injectable()
export class HttpClient {

    constructor(private http:Http){

    }

    get(url:string):Observable<Response>{
        return this.http.get(url);
    }

    post(url:string, obj:any):Observable<Response>{
        let requestOpts = new RequestOptions({
            headers : new Headers({'Content-Type':"application/json"})
         });
        return this.http.post(url, obj, requestOpts);
    }

    put(url:string, obj:any):Observable<Response>{
        let requestOpts = new RequestOptions({
            headers : new Headers({'Content-Type':"application/json"})
         });
        return this.http.put(url, obj, requestOpts);
    }

    delete(url:string):Observable<Response>{
        return this.http.delete(url);
    }



}