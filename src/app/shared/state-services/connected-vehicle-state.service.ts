import { Injectable } from '@angular/core';
import { StateItem } from '../state/state-item';
import { Observable } from 'rxjs';

@Injectable()
export class ConnectedVehicleStateService {
    private connectedStateItem: StateItem<boolean>;
    
    constructor() {
        this.connectedStateItem = new StateItem(false);        
    }
            
    // connected State Operations
    public get connected(): boolean {
        return this.connectedStateItem.getValue();
    }
    public set connected(newValue: boolean) {
        this.connectedStateItem.setValue(newValue);
    }
    public get connectedChange(): Observable<boolean> {
        return this.connectedStateItem.getChangeObservable();
    }    
}