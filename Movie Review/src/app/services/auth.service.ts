import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID
  ) {}

  login(username: string, password: string): boolean {
    // Simple demo authentication
    if (username === 'user' && password === 'password') {
      this.isLoggedIn = true;
      if (isPlatformBrowser(this.platformId)) {
        // Check for browser environment
        localStorage.setItem('isLoggedIn', 'true');
      }
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    if (isPlatformBrowser(this.platformId)) {
      // Check for browser environment
      localStorage.removeItem('isLoggedIn');
    }
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      // Check for browser environment
      return this.isLoggedIn || localStorage.getItem('isLoggedIn') === 'true';
    }
    return false;
  }
}
