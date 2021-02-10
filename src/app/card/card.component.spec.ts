import { render } from '@testing-library/angular';
import { CardComponent } from './card.component';

describe('Irá testar CardComponent', () => {
  it('Renderizar nome, tipo e imagem do Pokemon', async () => {
    const name = "Bulbasaur";
    const types = ["grass", "poison"];
    const image = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png";

    const card = await render(CardComponent, {
      componentProperties: {
        name,
        types,
        image
      }
    });
    const component = card.fixture.componentInstance;

    expect(component.name).toBe('Bulbasaur');

  });

});
