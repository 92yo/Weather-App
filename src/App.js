import React, {useEffect} from 'react';
import Routes from './routes'
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { getLocation } from './store/actions/weather'

import './style.css'

export default function App() {
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.isDark)

  useEffect(()=>{
    dispatch(getLocation('Tel Aviv'))
  })

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Header />
      <Routes />
    </div>
  );
}

