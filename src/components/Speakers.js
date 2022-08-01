import React from 'react'
import SpeakersToolbar from './SpeakersToolbar'
import SpeakersList from './SpeakersList'
import { useState } from 'react'


function Speakers({theme,setTheme}) {
  //state to handle display of sessions or not
  const[showSession,setShowSessions]=useState(false)
  return (
    <>
    <SpeakersToolbar theme={theme}
    setTheme={setTheme}
    showSession={showSession}
    setShowSessions={setShowSessions}
    ></SpeakersToolbar>
    <SpeakersList
    showSession={showSession}
    >
    </SpeakersList>
    </>
  )
}

export default Speakers