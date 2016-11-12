import {Injectable} from '@angular/core';
import {HttpClient} from "../httpclient/httpclient.provider"
import { Observable } from "rxjs/observable";
import { Response } from "@angular/http"

@Injectable()
export class ClimaProvider extends HttpClient {

    url:string = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22popayan%2C%20co%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    loadWeather():Observable<Clima>{
        return this.get(this.url).map(this.processResponse).catch(this.processError);
    }

    private processResponse(res:Response):Clima{
        let obj = res.json();
        let c:Clima =  new Clima();
        c.humedad = obj.query.results.channel.atmosphere.humidity;
        c.presion = obj.query.results.channel.atmosphere.pressure;
        c.descripcion = obj.query.results.channel.item.condition.text;
        c.temperatura = obj.query.results.channel.item.condition.temp;
        return c;
    }

    private processError(){
        return Observable.throw("Error al cargar clima");
    }


}

export class Clima{

    descripcion:string;
    temperatura:string;
    presion:string;
    humedad:string;

}