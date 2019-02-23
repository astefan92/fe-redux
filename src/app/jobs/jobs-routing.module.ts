import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { JobsComponent } from './jobs/jobs.component';

const jobsRoutes: Routes = [
  {
    path: 'jobs',
    component: JobsComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(jobsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class JobsRoutingModule { }
