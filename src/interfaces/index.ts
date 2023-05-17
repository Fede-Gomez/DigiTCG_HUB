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
