import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { ApplicationState } from "./reducers";
import { INCREMENT, DECREMENT, RESET } from './reducers/counter';

@Component({
    selector: "main",
    templateUrl: "app.html",
    styles: [
        '#counter {font-size:60px;}'
    ]
})
export class AppComponent {

    private counter$;

    constructor(private store: Store<ApplicationState>) {
        this.counter$ = this.store.select('counter');
    }

    inc() {
        this.store.dispatch({type: INCREMENT});
    }

    dec() {
        this.store.dispatch({type: DECREMENT});
    }

    reset() {
        this.store.dispatch({type: RESET});
    }
}
