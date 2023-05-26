export interface CardsState {
  listCards: { 
    id: string; 
    data: Card;
  }[];
  listCardsPicked: { 
    id: string; 
    data: Card;
    count: number
  }[];
  listCardsSelling: { 
    id: string; 
    data: Card;
    count: number
  }[];
  listCardsWished: { 
    id: string; 
    data: Card;
    count: number
  }[];
  listCardsFiltered:{
    id: string; 
    data: Card;
  }[];
  listFilter:{
    attribute: string[];
    color: string[];
    keyword: string[];
    level: string[];
    playCost: string[];
    rarity: string[];
    traits: string[];
    type: string[];
  }[];
}

export interface Card {
  attribute: string;
  cardNumber: string;
  color: string;
  digivolveColor:string;
  digivolveCost: number;
  digivolveFrom: number;
  effect: string;
  imgUrl: string;
  keyword:string[];
  level: number;
  name: string;
  playCost: number;
  power: number;
  rarity: string;
  source: string;
  stageLevel: string;
  traits: string[];
  type: string;
}

export interface UserState {
  user:{
    idUser: string;
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