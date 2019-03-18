import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConnectedVehicleStateService } from '../../shared/state-services/connected-vehicle-state.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-vehicle-connection-status',
    templateUrl: './vehicle-connection-status.component.html',
    styleUrls: ['./vehicle-connection-status.component.scss']
})
export class VehicleConnectionStatusComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[];
    public connected: boolean;
    public vin: string;


    constructor(private connectedVehicleStateService: ConnectedVehicleStateService) {
        this.subscriptions = [];
        this.subscriptions.push(this.connectedVehicleStateService.connectedChange.subscribe(connected => this.connected = connected));
        
        //TODO vin
        this.vin = "Unknown";
        //this.subscriptions.push(this.connectedVehicleStateService.vinChange.subscribe(vin => this.vin = vin));
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }


}
