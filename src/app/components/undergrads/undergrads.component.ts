import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'undergrads',
  templateUrl: './undergrads.component.html',
  styleUrl: './undergrads.component.css',
})
export class UndergradsComponent
  implements OnChanges, OnInit, DoCheck, OnDestroy
{
  // accept an array of students using @Input() decorator
  @Input() public undergradsList: any;
  @Input() public textValue: any; // value of text input

  // defined deleteEvent to emit event to parent component
  @Output() public deleteEvent = new EventEmitter();

  // lifecycle hooks
  // 1. constructor function runs first when component is created
  constructor() {
    console.log('UndergradsComponent constructor');
  }

  // 2. ngOnChanges runs when @Input() properties change
  ngOnChanges(changes: SimpleChanges): void {
    console.log('UndergradsComponent ngOnChanges', changes);
  }

  // 3. ngOnInit runs only once after ngOnChanges: used to initialize component properties
  ngOnInit(): void {
    console.log('UndergradsComponent ngOnInit');
  }

  // 4. ngDoCheck runs after ngOnInit: used to detect and act upon changes that Angular doesn't detect on its own
  ngDoCheck(): void {
    console.log('UndergradsComponent ngDoCheck');
  }

  // 5. ngOnDestroy runs when we navigate away from the component
  ngOnDestroy(): void {
    console.log('UndergradsComponent ngOnDestroy');
  }

  // method to emit event to parent component
  delete(id: number) {
    this.deleteEvent.emit(id);
  }
}
