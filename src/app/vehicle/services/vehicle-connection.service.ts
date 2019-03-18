import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class VehicleConnectionService {
    public connect(): Observable<any> {
        let fakeResponse = {
            connected: true,
            //    vin: "9BSK6X20003899355" 
        };
        return of(fakeResponse).pipe(
            delay(2000)
        );
    }

    public disconnect(): Observable<any> {
        let fakeResponse = { disconnected: true };
        return of(fakeResponse);
    }
}