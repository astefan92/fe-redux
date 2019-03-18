import { Component, OnInit, OnDestroy } from '@angular/core';
import { VehicleConnectionService } from '../services/vehicle-connection.service';
import { ConnectedVehicleStateService } from '../../shared/state-services/connected-vehicle-state.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-vehicle-connection-button',
    templateUrl: './vehicle-connection-button.component.html',
    styleUrls: ['./vehicle-connection-button.component.scss']
})
export class VehicleConnectionButtonComponent implements OnInit, OnDestroy {
    
    private connectedSub: Subscription;
    public connected: boolean;
    public connecting: boolean;


    constructor(private vehicleConnectionService: VehicleConnectionService, private connectedVehicleStateService: ConnectedVehicleStateService) {
        this.connectedSub = this.connectedVehicleStateService.connectedChange.subscribe(connected => this.connected = connected)
     }

    ngOnInit(): void { }

    ngOnDestroy(): void {
        this.connectedSub.unsubscribe();
    }

    public connectClick() {
        this.connecting = true;
        this.vehicleConnectionService.connect().subscribe(connectionResult => {
            this.connectedVehicleStateService.connected = connectionResult.connected;            
            
            //TODO vin
            //this.connectedVehicleStateService.vin = connectionResult.vin;
            
            this.connecting = false;
        });
    }

    public disconnectClick() {
        this.vehicleConnectionService.disconnect().subscribe(() => {
            this.connectedVehicleStateService.connected = false;
            
            //TODO vin
            //this.connectedVehicleStateService.vin = null;
        });
    }
}
