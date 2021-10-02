import { CardComponent } from "./card.component";
import { byText, byTestId, byRole, createComponentFactory } from "@ngneat/spectator/jest";

describe('CardComponent', () => {
  let createComponent = createComponentFactory(CardComponent);

  it('should create', () => {
    const spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });

  it('should show a title if input is a valid string', () => {
    const spectator = createComponent({
      props: { title: 'Hello!' }
    });
    const title = spectator.query(byRole('heading'));

    expect(title).toBeVisible();
    expect(title).toHaveText('Hello!');
  });

  it('should NOT show a title if input is a invalid string', () => {
    const spectator = createComponent({ props: { title: undefined }});
    const title = spectator.query(byRole('heading'));
    expect(title).not.toExist();
  });

  it('should show a description if input is a valid string', () => {
    const spectator = createComponent({
      props: { description: 'Hello!' }
    });
    const description = spectator.query(byText('Hello!'));

    expect(description).toBeVisible();
  });

  it('should NOT show a description if input is a invalid string', () => {
    const spectator = createComponent({ props: { description: undefined }});
    const description = spectator.query(byTestId('description'));
    expect(description).not.toExist();
  });

  it('should show a img if image input is provided', () => {
    const spectator = createComponent({
      props: { image: 'asd' }
    });
    const image = spectator.query(byRole('img'));

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', 'asd');
  });

  it('should NOT show the image if input is a invalid string', () => {
    const spectator = createComponent({ props: { image: undefined }});
    const image = spectator.query(byRole('img'));
    expect(image).not.toExist();
  });

  it('should show featured style if isFeatured is TRUE', () => {
    const spectator = createComponent({ props: { isFeatured: true }});
    expect(spectator.fixture.nativeElement).toHaveAttribute('is-featured', 'true');
  });

  it('should NOT show featured style if isFeatured is FALSE', () => {
    const spectator = createComponent({ props: { isFeatured: false } });
    expect(spectator.fixture.nativeElement).toHaveAttribute('is-featured', 'false');
  });
});