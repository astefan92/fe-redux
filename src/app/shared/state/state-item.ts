import { Observable, BehaviorSubject } from 'rxjs';

export class StateItem<T> {
    private subject: BehaviorSubject<T>;
    private change: Observable<T>;

    constructor(initialValue: T) {
        this.subject = new BehaviorSubject<T>(initialValue);
        this.change = this.subject.asObservable();
    }

    public setValue(newValue: T) {
        this.subject.next(newValue);
    }

    public getValue(): T {
        return this.subject.getValue();
    }

    public getChangeObservable(): Observable<T> {
        return this.change;
    }
}