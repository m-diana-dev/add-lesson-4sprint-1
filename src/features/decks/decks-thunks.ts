import { decksAPI } from './decks-api.ts'
import { AddDecksAC, SetDecksAC } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'

export const GetDecksTC = () => (dispatch: AppDispatch) => {
  decksAPI.getdecks()
    .then(res => {
      dispatch(SetDecksAC(res.data.items))
    })
}

export const AddDeckTC = (name: string) => async (dispatch: AppDispatch) => {
  return decksAPI.addDeck({name})
    .then(res => {
      // dispatch(AddDecksAC(res.data))
      //для того, чтобы не рушить пагинацию можно писать таким образом:
      dispatch(GetDecksTC())
    })
}