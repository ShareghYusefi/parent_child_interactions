import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'undergrads',
  templateUrl: './undergrads.component.html',
  styleUrl: './undergrads.component.css',
})
export class UndergradsComponent {
  // accept an array of students using @Input() decorator
  @Input() public undergradsList: any;

  // defined childEvent to emit event to parent component
  @Output() public childEvent = new EventEmitter();

  // method to emit event to parent component
  sendInfoToParent() {
    this.childEvent.emit('This is the data from child component');
  }
}
