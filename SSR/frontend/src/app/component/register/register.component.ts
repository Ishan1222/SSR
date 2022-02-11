import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    username!: String;
    password!: String;

    constructor(
        private authService: AuthService,
        private validateService: ValidateService,
        private router: Router,
        private flashMessage: FlashMessagesService
    ) { }

    ngOnInit() {
    }

    onRegisterSubmit() {
        const user = {
            username: this.username,
            password: this.password
        }
        if(!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
          }
        // Register user
        this.authService.registerUser(user).subscribe((data: { success: any; msg: string | undefined; }): void => {
            if (data.success) {
                this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
                this.router.navigate(['/login']);
            } else {
                this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
                this.router.navigate(['/register']);
            }
        });
    }
}