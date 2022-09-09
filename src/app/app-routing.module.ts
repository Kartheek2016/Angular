import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ArrayMethodsComponent } from './components/array-methods/array-methods.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Home',
            isMenu: true,
            hasChildren: false,
        }
    },
    {
        path: 'array-methods',
        component: ArrayMethodsComponent,
        data: {
            key: 'arrayMethods',
            title: 'Array Methods',
            isMenu: true,
            hasChildren: true,
            children: [
                {
                    title: "toString()",
                    key: 'toString'
                }, {
                    title: "join()",
                    key: 'join'
                }, {
                    title: "pop()",
                    key: 'pop'
                }, {
                    title: "push()",
                    key: 'push'
                }
            ]
        },
    }
];