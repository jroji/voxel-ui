import { CardComponent } from './card.component';
import { createComponentFactory } from '@ngneat/spectator';

describe('CardComponent', () => {
  const createComponent = createComponentFactory(CardComponent)

  it('should create', () => {
    const spectator = createComponent();
    expect(spectator).toBeTruthy();
  });
});
