import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('auth_token');
        const copiedReq = req.clone({
            headers : req.headers.set('Authorization', 'Bearer ' + token)
        });
        return next.handle(copiedReq).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    // hide loader
                }
            }))
    }
}
