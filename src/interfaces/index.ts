export interface CardsState {
  listCards: { 
    id: string; 
    data: Card 
  }[];
}

export interface Card {
  name: string,
  imgUrl: string,
  color: string,
  attribute: string,
  cardNumber: string,
  cardType: string,
  digivolveColor:string,
  digivolveCost: number,
  digivolveFrom: number,
  level: number,
  playCost: number,
  power: number,
  rarity: string,
  stageLevel: string,
  type: string,
  effect: string,
  source: string,
}

export interface UserState {
  user:{
    id: string;
    name: string;
    email: string;
    password: string;
    decks: Deck[];
  }[]
}

export interface Deck {
  name: string;
  listCards: Card[]
}