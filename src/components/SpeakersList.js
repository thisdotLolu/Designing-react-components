import React from 'react'
import Speaker from './Speaker'
import {data} from '../../SpeakerData'
import { useState,useEffect } from 'react'
import ReactPlaceHolder from 'react-placeholder'
import useRequestDelay,{REQUEST_STATUS} from './hooks/useRequestDelay'




function SpeakersList({showSession}) {
  const{
    data:speakersData,requestStatus,error,onFavoriteToggle
  }=useRequestDelay(2000,data)
  
  if(requestStatus===REQUEST_STATUS.FAILURE){
    return(
      <div className='text-danger'>
        ERROR: <b>Loading Speaker Data Failed{error}</b>
      </div>
    )
  }

  // if (isLoading===true) return <div>Loading...</div>

  return (
  <div className='container speakers-list'>
  <ReactPlaceHolder
  type='text'
  rows={15}
  className='speakersList-placeholder'
  ready={requestStatus===REQUEST_STATUS.SUCCESS}
  >
    <div className="row">
  {speakersData.map(function(speaker){
  return(
    <Speaker key={speaker.id} 
    speaker={speaker}
    showSession={showSession}
    onFavoriteToggle={()=>{
      onFavoriteToggle(speaker.id)
    }}
    ></Speaker>
     )
    })}
    </div>
  </ReactPlaceHolder>
</div>
  )
}

export default SpeakersList