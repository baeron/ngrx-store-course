import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>) {
    this.form = fb.group({
      email: ["example@example.com", [Validators.required]],
      password: ["example", [Validators.required]]
    });
  }

  ngOnInit() {}

  login() {
    console.log("Try call login method");
  }
}
