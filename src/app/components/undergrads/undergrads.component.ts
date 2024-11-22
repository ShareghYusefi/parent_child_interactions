import { Component, Input } from '@angular/core';

@Component({
  selector: 'undergrads',
  templateUrl: './undergrads.component.html',
  styleUrl: './undergrads.component.css',
})
export class UndergradsComponent {
  // accept an array of students using @Input() decorator
  @Input() public undergradsList: any;
}
