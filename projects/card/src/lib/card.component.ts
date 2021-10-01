import { Component, Input } from "@angular/core";

@Component({
  selector: 'voxel-card',
  template: `
    Card works!
    <p> {{ title }} </p>
		<img [src]="image" width="100">
  `,
  styles: []
})
export class CardComponent {
  /** Text with the card title */
  @Input() public title: string = '';
  /** Image route to be shown in the card header */
  @Input() public image: string = '';
}