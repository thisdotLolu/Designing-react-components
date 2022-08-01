import React from 'react'
import Speaker from './Speaker'
import {data} from '../../SpeakerData'
import SpeakersList from './SpeakersList'
import SpeakersToolbar from './SpeakersToolbar'
import Header from './Header'
import { useState } from 'react'
import Speakers from './Speakers'


function App() {
  const[theme, setTheme]=useState("Light")
  

  return (
      <div className={
        //toggle light and dark
        theme==='Light'?'container-fluid light':'container-fluid dark'
      }>
          <Header theme={theme}></Header>
          <Speakers theme={theme} setTheme={setTheme}></Speakers>
      </div>
  )
}

export default App;