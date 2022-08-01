import { data } from "../../../SpeakerData"
import { useState,useEffect } from "react"

export const REQUEST_STATUS={
    LOADING:'loading',
    SUCCESS:'success',
    FAILURE:'failure'
}

function useRequestDelay(delayTime=1000,initialData=[]){
  const[data,setData]=useState(initialData)
  const [requestStatus, setRequestStatus]=useState(REQUEST_STATUS.LOADING)
  const[error,setError]=useState('')

  // const delay=(ms)=>new Promise((resolve)=>setTimeout(resolve,ms))

const delay=function(ms){
  return new Promise((resolve)=>{
    setTimeout(resolve,ms)
  })
}

  useEffect(()=>{
    async function delayFunc(){
      try{
      await delay(delayTime)
      setRequestStatus(REQUEST_STATUS.SUCCESS)
      setData(data);
      }
      catch(e){
        setRequestStatus(REQUEST_STATUS.FAILURE)
        setError(e)
      }
    }
    delayFunc()
  },[])

  //function to toggle favorite
  function upDateRecord(recordUpdated){
    const newRecords=data.map(function(rec){
      return rec.id===recordUpdated.id?recordUpdated:rec;
    });
    async function delayFunction(){
      try{
        await delay(delayTime);
        setData(newRecords)
      }catch(error){

      }
    }
    delayFunction();
  }

  return{
      speakersData,requestStatus,error,upDateRecord
  }

}

export default useRequestDelay;