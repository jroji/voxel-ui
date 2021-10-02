import { ChangeDetectionStrategy, Component, HostBinding, Input } from "@angular/core";

@Component({
  selector: 'voxel-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  /** Text with the card title */
  @Input() public title?: string;
  /** Text with the card description */
  @Input() public description?: string;
  /** Image route to be shown in the card header */
  @Input() public image?: string;
  /** Reflects the provided value on is-featured attribute */
  @HostBinding('attr.is-featured') @Input() public isFeatured: boolean = false;
}