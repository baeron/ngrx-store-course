import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { StoreModule } from "@ngrx/store";
import * as fromAuth from "./auth.reducer";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guard/auth.guard";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature("auth", fromAuth.authReducer)
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuard]
    };
  }
}
