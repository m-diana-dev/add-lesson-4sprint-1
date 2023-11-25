import { decksAPI } from './decks-api.ts'
import { SetDecksAC } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'

export const GetDecksTC = () => (dispatch: AppDispatch) => {
  decksAPI.getdecks()
    .then(res => {
      dispatch(SetDecksAC(res.data.items))
    })
}