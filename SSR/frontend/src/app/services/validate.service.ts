import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user: { username: any; password: any; }){
    if(user.username == undefined || user.password == undefined) {
        return false;
    } else {
      return true;
    }
  }
}
