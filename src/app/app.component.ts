import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angularapp';
  isExpanded = true;
  isShowing = false;
  showSubmenu: boolean = false;
  showSubSubMenu: boolean = false;
}
