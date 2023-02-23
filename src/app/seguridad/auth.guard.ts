import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ApiauthService } from "../servicios/apiauth.service";



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private apiauthService: ApiauthService
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const cuenta = this.apiauthService.usuarioData;
        if (cuenta) {
            return true;
        }

        this.router.navigate(['/login']);

        return false;
    }
}