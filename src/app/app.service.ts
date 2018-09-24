export class UserStatusService{
  public activeUsers: string[] = ["katya", "tatiana", "alexandria"];
  public inactiveUsers: string[] = ["leon", "dewon", "karzai"];

  public setIntervalInactive(id: number){
    console.log(event);
    this.inactiveUsers.push(this.activeUsers[id])
    this.activeUsers.splice(id, 1);
  }

  public setIntervalActive(id: number){
    console.log(event);
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
  }

}