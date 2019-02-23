export class Job {
  public id: number;
  public description: string;

  constructor(job: any = null) {
    this.id = job ? job.Id : null;
    this.description = job ? job.Description : '';
  }
}
