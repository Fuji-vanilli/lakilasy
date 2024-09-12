import { AfterViewInit, Component } from '@angular/core';

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
export class SidebarComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    this.loadSidebar();
  }

  loadSidebar() {
    const humburger= document.querySelector("#toggle-btn");

    humburger?.addEventListener("click", function() {
      document.querySelector("#sidebar")?.classList.toggle("expand")
    });
  }
}
