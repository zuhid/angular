import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "zc-button",
  templateUrl: "./button.component.html",
  standalone: false,
})
export class ButtonComponent {
  @Input() id!: string; // the id of the button
  @Input() text!: string; // the text of the button
  @Output() onclick = new EventEmitter();
}
