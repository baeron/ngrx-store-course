import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../../material/material.module";

import { AuthService } from "./services/auth.service";

import {LoginComponent} from "./containers";

const routes: Routes = [{ path: "login", component: LoginComponent }];

@NgModule({
  imports: [ReactiveFormsModule, MaterialModule, RouterModule.forChild(routes)],
  declarations: [LoginComponent],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AuthRoutingModule {}
