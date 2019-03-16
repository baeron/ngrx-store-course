import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../../reducers";
import { AuthService } from "../../services/auth.service";
import { noop } from "rxjs";
import { tap } from "rxjs/operators";
import { Login } from '../../auth.actions';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ["example@example.com", [Validators.required]],
      password: ["example", [Validators.required]]
    });
  }

  ngOnInit() {}

  login() {
    const formValue = this.form.value;
    this.auth
      .login(formValue.email, formValue.password)
      .pipe(
        tap(user => {
          this.store.dispatch(new Login({user}));
          this.router.navigateByUrl('courses');
        })
      )
      .subscribe(noop, () => console.error("Login Failed"));
  }
}
