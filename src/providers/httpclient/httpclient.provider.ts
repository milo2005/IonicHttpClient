import {Http, Response, RequestOptions, Headers} from "@angular/http"
import {Observable}  from "rxjs/observable"

export class HttpClient {

    constructor(private http:Http){

    }

    protected get(url:string):Observable<Response>{
        return this.http.get(url);
    }

    protected post(url:string, obj:any):Observable<Response>{
        let requestOpts = new RequestOptions({
            headers : new Headers({'Content-Type':"application/json"})
         });
        return this.http.post(url, obj, requestOpts);
    }

    protected put(url:string, obj:any):Observable<Response>{
        let requestOpts = new RequestOptions({
            headers : new Headers({'Content-Type':"application/json"})
         });
        return this.http.put(url, obj, requestOpts);
    }

    protected delete(url:string):Observable<Response>{
        return this.http.delete(url);
    }



}