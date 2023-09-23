const voidCard = {
  attribute: '',
  cardNumber: '',
  cardType: '',  
  color: '',
  digivolveColor:'',
  digivolveColor2:'',
  digivolveCost: 0,
  digivolveCost2: 0,
  digivolveFrom: 0,
  digivolveFrom2: 0,
  effect: '',
  effect2: '',
  effect3: '',
  imgUrl: '',
  keyword:[],
  level: 0,
  name: '',
  playCost: 0,
  power: 0,
  rarity: '',
  source: '',
  stageLevel: '',
  traits: [],
  inheritedEffect: '',
  securityEffect: '',
  type: '',
}
const voidFilter = {
  label: '',
  value: 0 as number | "" as string
}
const voidListCards = {
    data:voidCard, 
    id:'', 
    count:0
}

interface listCards{
  id: string; 
  data: Card[];
  count?: number;
}
interface Card {
  attribute: string;
  cardNumber: string;
  cardType: string;
  color: string;
  digivolveColor:string;
  digivolveColor2:string;
  digivolveCost: number;
  digivolveCost2: number;
  digivolveFrom: number;
  digivolveFrom2: number;
  effect: string;
  effect2: string;
  effect3: string;
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
  inheritedEffect: string;
  securityEffect: string;
  type: string;
}
interface Deck {
  name: string;
  listCards: Card[]
}
interface Filters{
  playCost: Filter,
  level: Filter,
  type: Filter,
  rarity: Filter,
  color: Filter,
  keyword: Filter,
  attribute: Filter,
  traits: Filter,
}
interface Filter{
  label: string,
  value: string | number
}

export const initialStateCards: ListCards ={
  view: voidListCards,
  searched: voidListCards,
  picked:[],
  selling:[],
  wished:[],
  listFilter:{
    level: voidFilter,
    attribute: voidFilter,
    color: voidFilter,
    keyword: voidFilter,
    playCost: voidFilter,
    rarity: voidFilter,
    traits: voidFilter,
    type: voidFilter
  }
}


export interface ListCards {
  view: listCards;            //list cards of BottomTabNavigation 
  searched: listCards;        //list of filtred cards of BottomTabNavigation 
  picked: listCards[];          //list of cards selected
  selling: listCards[];         //list of cards for sell
  wished: listCards[];          //list of cards for add
  listFilter: Filters;        //list of filter for search in api
};
export interface folderState {
  folder:{
    name: string;
    img: string;
  }[];
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



















// export interface CardsState {
//   listCards: { 
//     id: string; 
//     data: Card;
//   }[];
//   listCardsPicked: { 
//     id: string; 
//     data: Card;
//     count: number
//   }[];
//   listCardsSelling: { 
//     id: string; 
//     data: Card;
//     count: number
//   }[];
//   listCardsWished: { 
//     id: string; 
//     data: Card;
//     count: number
//   }[];
//   listCardsFiltered:{
//     id: string; 
//     data: Card;
//   }[];
//   listFilter:{
//     attribute: string[];
//     color: string[];
//     keyword: string[];
//     level: string[];
//     playCost: string[];
//     rarity: string[];
//     traits: string[];
//     type: string[];
//   }[];
// }


