import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    title: string;
    form: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private authservice: AuthService,
        @Inject('BASE_URL') private baseUrl: string) {
        this.title = "User Login";
        this.createForm();

    }

    createForm() {
        this.form = this.fb.group({
            Username: ['', Validators.required],
            Password: ['', Validators.required]

        })
    }

    onSubmit() {
        var url = this.baseUrl + "api/token/auth";
        var username = this.form.value.Username;
        var password = this.form.value.Password;
        this.authservice.login(username, password)
            .subscribe(res => {
                // login successful
                // outputs the login info through a JS alert.
                // IMPORTANT: remove this when test is done.
                alert("Login successful! "
                    + "USERNAME: "
                    + username
                    + " TOKEN: "
                    + this.authservice.getAuth()!.token
                );
                this.router.navigate(["focus"]);
            },
            err => {
                // login failed
                console.log(err)
                this.form.setErrors({
                    "auth": "Incorrect username or password"
                });
            });
    }


    onBack() {
        this.router.navigate(["focus"]);
    }
    // retrieve a FormControl


    getFormControl(name: string) {
        return this.form.get(name);
    }
    // returns TRUE if the FormControl is valid
    isValid(name: string) {
        var e = this.getFormControl(name);
        return e && e.valid;
    }
    // returns TRUE if the FormControl has been changed
    isChanged(name: string) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched);
    }
    // returns TRUE if the FormControl is invalid after user changes
    hasError(name: string) {
        var e = this.getFormControl(name);
        return e && (e.dirty || e.touched) && !e.valid;
    }
}










    /* model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }*/

    /*login(f: NgForm){
      console.log(f.value);
      console.log('Name: ' + f.controls['email'].value);
      console.log('form valid: ' + f.valid);
      console.log('form submitted: ' +f.submitted);
      f.controls['email'].value;
      f.controls['password'].value;
    }*/


