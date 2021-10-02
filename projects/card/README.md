# Card

[🌅 View on Figma](https://www.figma.com/file/PAZbL8SeNxl6yauLCv56jT/Ecommerce?node-id=4%3A316)

Card component shows an image, a title and a description providing
the correct inputs.

## 🖌 Style Customization

|  name                       | value   |
|-----------------------------|---------|
| --cat-card-background       | #F2F2F2 |
| --cat-card-spacing          | 8px     |
| --cat-card-title-size       | 18px    |
| --cat-card-description-size | 14px    |
| --cat-card-text-color       | #595959 |
| --cat-card-image-height     | 300px   |

<voxel-card
  style="max-width: 320px"
  [image]="image"
  [title]="title"
  [description]="description"
  alt="Image alt"
></voxel-card

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Code scaffolding

Run `ng generate component component-name --project card` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project card`.
> Note: Don't forget to add `--project card` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build card` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build card`, go to the dist folder `cd dist/card` and run `npm publish`.

## Running unit tests

Run `ng test card` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
