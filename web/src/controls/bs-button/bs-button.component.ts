import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'zc-bs-button',
  standalone: false,
  templateUrl: './bs-button.component.html',
})
export class BsButtonComponent {
  @Input() id!: string; // the id of the button
  @Input() text!: string; // the text of the button
  @Output() onclick = new EventEmitter();
}
