import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.authService.getToken();
    if (state.url.includes('login')) {
      if (!token) {
        return true;
      } else {
        this.router.navigate(['/admin']);
        return false;
      }
    } else {
      if (token) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
  }
}

