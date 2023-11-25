import axios from 'axios'
import { DeckType } from './decks-reducer.ts'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getdecks(){
    return instance.get<ResponseType>('decks')
  }
}


//types
type ResponseType = {
  items: DeckType[],
  pagination: Pagination,
  maxCardsCount: number
}

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}


