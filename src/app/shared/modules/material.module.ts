import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";

const MATERIALS = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule
];

@NgModule({
  imports: MATERIALS,
  exports: MATERIALS
})
export class MaterialModule {}
