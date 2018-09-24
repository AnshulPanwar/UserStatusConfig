import {Component, Input,Output, EventEmitter} from "@angular/core";


@Component({
    selector: "app-active-users",
    templateUrl: "./active-users.component.html"
})
export class ActiveusersComponent{

    @Input() users: string[];
    @Output() setToInactiveVal = new EventEmitter<number>();

    constructor(){}

    public setToInactive(id: number){
        this.setToInactiveVal.emit(id);
    }

}