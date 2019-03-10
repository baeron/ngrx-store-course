import { NgModule } from "@angular/core";

import {
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule
} from "@angular/material";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
