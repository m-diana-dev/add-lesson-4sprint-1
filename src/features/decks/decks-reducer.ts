
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
    case 'ADD-DECK':
      return {...state, decks: [{...action.deck}, ...state.decks]}
    default:
      return state
  }
}

//types
type ActionType = ReturnType<typeof SetDecksAC> | ReturnType<typeof AddDecksAC>

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
export const SetDecksAC = (decks: DeckType[]) => ({ type: 'SET-DECKS' as const, decks })

export const AddDecksAC = (deck: DeckType) => ({ type: 'ADD-DECK' as const, deck})
