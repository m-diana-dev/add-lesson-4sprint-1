import s from './DecksList.module.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { GetDecksTC } from '../decks-reducer.ts'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(state => state.decks.decks)
  useEffect(()=>{
    dispatch(GetDecksTC())
  },[])
  return <ul className={s.list}></ul>
}


