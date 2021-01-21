import { CardComponent } from './card.component';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
  title: 'Card',
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
  argTypes: {
    backgroundColor: { control: 'color' },
  }
};

const name = "Bulbasaur";
const number = "#001";
const types = ["grass", "poison"];
const image = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png";
export const Bulbasaur = () =>({
  component:CardComponent,
  props:{
    name: object('name', name ),
    number: object('number', number ),
    types: object('types', types ),
    image: object('image', image ),
  }
});

//task: object('task', { ...taskData }),

const name2 = "Ivysaur";
const number2 = "#002";
const types2 = ["grass", "poison"];
const image2 = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png";
export const Ivysaur = () =>({
  component:CardComponent, props:{ name:name2, number:number2, types:types2, image:image2 }
});
