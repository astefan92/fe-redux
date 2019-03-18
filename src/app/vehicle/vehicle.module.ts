import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleConnectionButtonComponent } from './connection-button/vehicle-connection-button.component';
import { VehicleConnectionStatusComponent } from './connection-status/vehicle-connection-status.component';
import { ConnectedVehicleStateService } from '../shared/state-services/connected-vehicle-state.service';
import { VehicleConnectionService } from './services/vehicle-connection.service';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleDashboardComponent } from './vehicle-dashboard/vehicle-dashboard.component';

@NgModule({
    declarations: [VehicleDashboardComponent, VehicleConnectionButtonComponent, VehicleConnectionStatusComponent],
    imports: [ CommonModule, VehicleRoutingModule ],
    exports: [],
    providers: [ConnectedVehicleStateService, VehicleConnectionService],
})
export class VehicleModule {}