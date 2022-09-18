import { Component, OnInit } from '@angular/core';
import { routes } from './app-routing.module';
import { Route, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public showSubMenu: string = "";

	public menuItems: any[] = [];

	constructor(private _router: Router) { }

	ngOnInit() {
		this.menuItems = routes.filter(route => route.data && route.data['isMenu']);
	}

	public navigate(menuItem: Route, isParent: boolean, childIndex: number): void {
		if (menuItem.data && menuItem.data['isMenu']) {
			if (isParent) {
				if (menuItem.data['hasChildren']) {
					this.showSubMenu = (this.showSubMenu && this.showSubMenu === menuItem.data['key']) ? "" : menuItem.data['key'];
				}
				this._router.navigateByUrl('/' + menuItem.path);
			} else if (!isParent && menuItem.data['hasChildren']) {
				this._router.navigateByUrl('/' + menuItem.path + '?scrollTo=' + menuItem.data['children'][childIndex].key);
			}
		}
	}
}
