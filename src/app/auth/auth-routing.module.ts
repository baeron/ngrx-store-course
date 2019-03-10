import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./containers";
import { MaterialModule } from "../../material/material.module";

const routes: Routes = [{ path: "", component: LoginComponent }];

@NgModule({
  imports: [ReactiveFormsModule, MaterialModule, RouterModule.forChild(routes)],
  declarations: [LoginComponent],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
