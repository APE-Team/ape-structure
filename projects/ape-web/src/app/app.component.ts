import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { AuthenticationStateService, UserModel } from '@ape-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public isAuthenticated$: Observable<boolean> | undefined;
    public isCollapsed = false;

    private user: UserModel = {
        id: '10101010',
        displayName: 'JM',
        firstName: 'James',
        lastName: 'Montgomery',
        roles: []
    }

    public constructor(
        private authenticationStateService: AuthenticationStateService
    ) {}

    public loginClickHandler() {
        this.authenticationStateService.dispatchAuthenticated(this.user);
    }

    public logoutClickHandler() {
        this.authenticationStateService.dispatchLogout();
    }

    public ngOnInit(): void {
        this.isAuthenticated$ = this.authenticationStateService.isAuthenticated$();
    }
}
