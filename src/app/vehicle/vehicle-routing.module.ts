import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { VehicleDashboardComponent } from './vehicle-dashboard/vehicle-dashboard.component';

const vehicleRoutes: Routes = [
  {
    path: 'vehicle',
    component: VehicleDashboardComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(vehicleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VehicleRoutingModule { }
