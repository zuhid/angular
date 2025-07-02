import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
// import { BsButtonComponent } from './bs-button/bs-button.component';

@NgModule({
  declarations: [
    CardComponent,
    TextComponent,
    ButtonComponent,
    // BsButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardComponent,
    TextComponent,
    ButtonComponent,
    // ButtonBsComponent
  ],
})
export class ControlsModule { }
