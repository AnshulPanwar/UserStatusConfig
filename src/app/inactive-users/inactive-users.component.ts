import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-inactive-users",
    templateUrl: "./inactive-users.component.html"
})

export class InactiveusersComponent {

    @Input() inactiveUsers: string[];
    @Output() setToActiveVal = new EventEmitter<number>();

    constructor(){}

    public setToActive(id: number){
        this.setToActiveVal.emit(id);
    }

}