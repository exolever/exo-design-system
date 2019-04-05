import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExOAvatarComponent } from "./avatar.component";
import { MatIconModule, MatProgressSpinnerModule, MatTooltipModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    ExOAvatarComponent
  ],
  exports: [
    ExOAvatarComponent,
    MatTooltipModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class ExOAvatarModule {}
