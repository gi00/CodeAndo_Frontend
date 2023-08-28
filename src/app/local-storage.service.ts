import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor() { }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
    this.isAuthenticatedSubject.next(true);
    localStorage.setItem('isLoggedIn', true.toString());
  }

  logout() {
    // Lógica para cerrar sesión
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('isLoggedIn'); // Elimina el estado de autenticación
    localStorage.removeItem('usuario'); // Elimina los datos del usuario
  }
}
