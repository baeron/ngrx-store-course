import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth/guard/auth.guard";

const routes: Routes = [
  { path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "courses",
    loadChildren: "./courses/courses.module#CoursesModule",
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
