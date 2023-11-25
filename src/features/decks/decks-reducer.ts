

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
export const SetDecksAC = (decks: DeckType[]) => ({ type: 'SET-DECKS' as const, decks })
