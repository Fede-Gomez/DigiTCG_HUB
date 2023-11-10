const voidCard = {
  attribute: '',
  cardNumber: '',
  cardType: '',  
  color: '',
  digivolveColor:'',
  digivolveColor2:'',
  digivolveColor3:'',
  digivolveCost: 0,
  digivolveCost2: 0,
  digivolveCost3: 0,
  digivolveFrom: 0,
  digivolveFrom2: 0,
  digivolveFrom3: 0,
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
  name: string;
  cardType: string;
  color: string;
  digivolveColor:string;
  digivolveColor2:string;
  digivolveColor3:string;
  digivolveFrom: number;
  digivolveFrom2: number;
  digivolveFrom3: number;
  playCost: number;
  digivolveCost: number;
  digivolveCost2: number;
  digivolveCost3: number;
  level: number;
  power: number;
  traits: string[];
  attribute: string;
  stageLevel: string;
  rarity: string;
  cardNumber: string;
  treated: string;
  specialEvolve: string;
  dnaDigivolve: string;
  effect: string;
  effect2: string;
  effect3: string;
  effect4: string;
  effect5: string;
  digiXcross: string,
  inheritedEffect: string;
  inheritedEffect2: string;
  inheritedEffect3: string;
  source: string;
  imgUrl: string;
  securityEffect: string;
  keyword:string[];
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
  fullListCards: voidListCards,
  filtred: [],
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
  filtred: listCards;        //list of filtred cards of BottomTabNavigation 
  picked: listCards[];          //list of cards selected
  selling: listCards[];         //list of cards for sell
  wished: listCards[];          //list of cards for add
  listFilter: Filters;        //list of filter for search in api
  fullListCards: listCards;
};
export interface folderState {
  folders:{
    name: string;
    img: string;
  }[];
}

export interface appState {
  modalFilterVisible: boolean;
  modalCardVisible: boolean;
  flipedCard: boolean;
  modalCardView: object;
  builderWishedSelling: string;
}

export interface UserState {
  profile:{
    idUser: string;
    name: string;
    email: string;
    password: string;
    decks: Deck[];
    cardsPicked: listCards[];
    cardsBuy: listCards[];
    cardsSell: listCards[];
  }[]
}
