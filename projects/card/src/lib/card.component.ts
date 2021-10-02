import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from "@angular/core";

/**
 *
 * [🌅 View on Figma](https://www.figma.com/file/PAZbL8SeNxl6yauLCv56jT/Ecommerce?node-id=4%3A316)
 *
 * Card component shows an image, a title and a description providing
 * the correct inputs.
 *
 * ## 🖌 Style Customization
 *
 * |  name                       | value   |
 * |-----------------------------|---------|
 * | --cat-card-background       | #F2F2F2 |
 * | --cat-card-spacing          | 8px     |
 * | --cat-card-title-size       | 18px    |
 * | --cat-card-description-size | 14px    |
 * | --cat-card-text-color       | #595959 |
 * | --cat-card-image-height     | 300px   |
 *
 * <voxel-card
 *    style="max-width: 320px"
 *    [image]="image"
 *    [title]="title"
 *    [description]="description"
 *    alt="Image alt"
 * ></voxel-card
*/
@Component({
  selector: 'voxel-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  /** Text with the card title */
  @Input() public title?: string;
  /** Text with the card description */
  @Input() public description?: string;
  /** Image route to be shown in the card header */
  @Input() public image?: string;
  /** Image alternative text. Takes title as default if not provided */
  @Input() public alt?: string;
  /** Reflects the provided value on is-featured attribute */
  @HostBinding('attr.is-featured') @Input() public isFeatured: boolean = false;

  public ngOnInit(): void {
    if (!this.alt) {
      this.alt = this.title ?? 'Card image';
    }
  }
}