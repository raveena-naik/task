import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AccountService } from '../services/accounts.service';

// import { AccountService } from '../_services';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        // private accountService: AccountService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // const user = this.accountService.userValue;
        if (this.isLoggedIn()) {
            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }

    isLoggedIn() {
        let status;
        if (localStorage.getItem('token') != null || localStorage.getItem('token') != undefined) {
            status = true;
        } else {
            status = false;
        }
        return status;
    }
}