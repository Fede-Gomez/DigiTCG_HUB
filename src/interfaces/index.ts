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