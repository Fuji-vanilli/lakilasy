import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  { path: 'admin', component: SidebarComponent, children: [
    { path: 'student', component: StudentComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
