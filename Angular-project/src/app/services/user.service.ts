import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../interface/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://articles-db-46e7b-default-rtdb.firebaseio.com/';

  get isLoggedIn(): boolean {
    return localStorage.getItem('user') ? true : false;
  }
  
constructor(private http: HttpClient, private router: Router) { }

registerUser(user: User): any {

    const id = user.id;

    this.http.post(this.url + 'users.json', user).subscribe((res) => {
        localStorage.setItem('user', JSON.stringify(id));
        this.router.navigate(['/dashboard']);
        
    });
}

loginUser(email: string, password: string) {
    this.http.get<Object>(`${this.url}users.json`).subscribe((res) => {
      
      const user = Object.values(res).find((a: any) => {
          return a.email === email && a.password === password;
      })
      

      if (user) {
          const existingUser = localStorage.getItem('user');
          
          if (!existingUser) {
            localStorage.setItem('user', JSON.stringify(user.id))
            this.router.navigate(['/dashboard']);
          } 
          
      } else {
        
        alert('user not found');
        return user;
    }
      
    })
}

      logoutUser(): void {
          localStorage.clear();
      }
  

}
