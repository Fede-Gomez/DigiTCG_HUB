import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import firestore from '@react-native-firebase/firestore';

// interface cardState {
//     name: string
//     cardType: string
//     color: string
//     rarity: string
//     playcost: number
//     cardNumber: string
//     attribute?:string
//     level?: number
//     type?: string
//     stageLevel?: string
//     digivolveColor?: string
//     digivolveFrom?: number
//     digivolveCost?: number
//     power?:number
//   }
//   const initialState: cardState = {
//     name: '',
//     cardType: '',
//     color: '',
//     rarity: '',
//     playcost: 0,
//     cardNumber: '',
//     attribute: '',
//     level: 0,
//     type: '',
//     stageLevel: '',
//     digivolveColor: '',
//     digivolveFrom: 0,
//     digivolveCost: 0,
//     power: 0,
//   }

interface Card {
  id: string;
  data: string | number;
}

interface CardsState {
  cards: Card[];
}

const initialState: CardsState = {
  cards: [
    {
      id: '',
      data: ''
    }
  ]
};

export const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action) =>{
      state.cards = action.payload
    }
  }
})

export const { setCards } = cardsReducer.actions

export default cardsReducer.reducer