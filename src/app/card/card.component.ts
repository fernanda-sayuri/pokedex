import { Component, OnInit, Input } from '@angular/core';

const getColorClass = function(type:string){
  switch (type) {
    case 'water':
      return "card--color--water"

    case 'poison':
      return "card--color--poison"

    case 'grass':
      return "card--color--grass";

    case 'electric':
      return "card--color--electric";

    case 'rock':
      return "card--color--rock";

    case 'dark':
      return "card--color--dark";

    case 'flying':
      return "card--color--flying";

    case 'dragon':
      return "card--color--dragon";

    case 'bug':
      return "card--color--bug";

    case 'ground':
      return "card--color--ground";

    case 'psychic':
      return "card--color--psychic";

    case 'fighting':
      return "card--color--fighting";

    case 'ghost':
      return 'card--color--ghost';

    case 'ice':
      return 'card--color--ice';

    default:
      return '';
  }
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() name='Bulbasaur';
  @Input() number='#001';
  @Input() types=['Grass','Poison'];
  @Input() image='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png';

  colorClass = getColorClass(this.types[0].toLowerCase());

  constructor() { }

  ngOnInit(): void {
  }

}
