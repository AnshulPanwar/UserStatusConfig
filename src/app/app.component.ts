import { Component } from '@angular/core';
import { UserStatusService } from "src/app/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserStatusService]
})
export class AppComponent {
  title = 'serverStatus';
  public activeUsers: string[] = this.statusService.activeUsers;
  public inactiveUsers: string[] = this.statusService.inactiveUsers;
  constructor(public statusService: UserStatusService){}

  public setIntervalInactive(id: number){
    this.statusService.setIntervalInactive(id);
  }

  public setIntervalActive(id: number){
    this.statusService.setIntervalActive(id);
  }
  
}
