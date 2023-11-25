import { useAppDispatch, useAppSelector } from '../../../../app/store.ts'
import { SelectDecks } from '../../decks-selectors.ts'
import { useEffect } from 'react'
import { GetDecksTC } from '../../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(SelectDecks)
  useEffect(()=>{
    dispatch(GetDecksTC())
  },[dispatch])

  return {decks}
}