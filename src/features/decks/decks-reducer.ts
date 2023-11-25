import { Dispatch } from 'react'
import { decksAPI } from './decks-api.ts'

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: ActionType): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return { ...state, decks: action.decks }
    default:
      return state
  }
}

//types
type ActionType = ReturnType<typeof SetDecksAC>

export type DeckType = {
  author: {
    id: string
    name: string
  },
  id: string
  userId: string
  name: string
  isPrivate: true
  shots: number
  cover: string
  rating: number
  created: string
  updated: string
  cardsCount: number
}

//AC
const SetDecksAC = (decks: DeckType[]) => ({ type: 'SET-DECKS', decks })



//TC
export const GetDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.getdecks()
    .then(res => {
      dispatch(SetDecksAC(res.data.items))
    })
}