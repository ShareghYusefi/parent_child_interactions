import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'undergrads',
  templateUrl: './undergrads.component.html',
  styleUrl: './undergrads.component.css',
})
export class UndergradsComponent {
  // accept an array of students using @Input() decorator
  @Input() public undergradsList: any;

  // defined deleteEvent to emit event to parent component
  @Output() public deleteEvent = new EventEmitter();

  // method to emit event to parent component
  delete(id: number) {
    this.deleteEvent.emit(id);
  }
}
