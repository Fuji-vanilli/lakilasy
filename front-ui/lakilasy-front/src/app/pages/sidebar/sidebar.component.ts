import { Component } from '@angular/core';

export type menuItem= {
  icon?: string,
  label?: string,
  route?: string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

}
