// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { CardComponent } from '../src/public-api';

export default {
  title: 'Voxel-ui/Card',
  component: CardComponent,
  argTypes: {
    title: { control: { type: 'text' }},
    image: {
      options: [
        'https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg',
        'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d'
      ],
      control: { type: 'select' }
    }
  },
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Default = Template.bind({
	title: 'Default'
});
export const Featured = Template.bind({
	title: 'Featured'
});
export const Dark = Template.bind({
	title: 'Dark'
});